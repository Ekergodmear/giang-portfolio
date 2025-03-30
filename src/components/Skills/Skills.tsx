import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  background: var(--title-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
  margin-top: 2rem;
  padding: 2rem 0;
`;

const SkillCard = styled(motion.div)`
  position: relative;
  width: 100%;
  padding-top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const SkillCircle = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 247, 173, 0.15) 0%, rgba(255, 169, 249, 0.15) 100%);
    z-index: 1;
  }
`;

const SkillProgress = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--primary-gradient);
  opacity: 0.15;
  transform-origin: center;
  transition: opacity 0.3s ease-in-out;

  ${SkillCircle}:hover & {
    opacity: 0.25;
  }
`;

const SkillIcon = styled(motion.div)`
  font-size: 2.2rem;
  z-index: 2;
  position: absolute;
  transition: all 0.3s ease-in-out;

  ${SkillCircle}:hover & {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const SkillName = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1rem;
  color: var(--text-color);
  text-align: center;
  width: 100%;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0.5rem;
`;

const DotGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.05;
  background-image: radial-gradient(var(--text-color) 1px, transparent 1px);
  background-size: 20px 20px;
`;

const SkillPercentage = styled(motion.div)`
  font-size: 1.6rem;
  color: var(--text-color);
  font-weight: 600;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease-in-out;

  ${SkillCircle}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const Skills: React.FC = () => {
  const skills = [
    { name: 'Headhunting', icon: '🎯', progress: 0.9 },
    { name: 'Stakeholder Management', icon: '🤝', progress: 0.85 },
    { name: 'Talent Sourcing', icon: '🔍', progress: 0.95 },
    { name: 'Candidate Screening', icon: '📋', progress: 0.88 },
    { name: 'Interview Coordination', icon: '🎙️', progress: 0.92 },
    { name: 'Tech Industry Knowledge', icon: '💻', progress: 0.87 },
    { name: 'LinkedIn Recruiting', icon: '🔗', progress: 0.94 },
    { name: 'Team Building', icon: '👥', progress: 0.86 }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </Title>

        <DotGrid />

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SkillCircle
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillProgress
                  initial={{ scale: 0 }}
                  whileInView={{ scale: skill.progress }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillPercentage>{Math.round(skill.progress * 100)}%</SkillPercentage>
              </SkillCircle>
              <SkillName>{skill.name}</SkillName>
              <Tooltip
                id={`skill-${index}`}
                place="top"
                content={`${Math.round(skill.progress * 100)}% proficiency`}
              />
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 