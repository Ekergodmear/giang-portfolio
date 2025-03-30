import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import '../../styles/slick.css';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.1);
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

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 247, 173, 0.1) 0%, rgba(255, 169, 249, 0.1) 100%);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px) rotateX(10deg);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

const Company = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  position: relative;
  z-index: 2;
`;

const Period = styled.div`
  font-size: 1rem;
  color: var(--text-color-light);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  position: relative;
  z-index: 2;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-color-light);
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 247, 173, 0.1) 0%, rgba(255, 169, 249, 0.1) 100%);
    z-index: 1;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
`;

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      company: "Find Talent",
      period: "8/2024 - Now",
      stats: {
        followers: "4.8K+",
        placements: "29"
      },
      details: "Leading IT recruitment initiatives and building strong relationships with tech talent."
    },
    {
      company: "Freelancer Contract",
      period: "5/2023 - 7/2024",
      stats: {
        projects: "15+",
        clients: "10+"
      },
      details: "Managed multiple recruitment projects and established a strong client base."
    },
    {
      company: "DigiSource",
      period: "1/2022 - 1/2023",
      stats: {
        positions: "50+",
        success: "95%"
      },
      details: "Specialized in tech talent acquisition and team building strategies."
    },
    {
      company: "Talent Brand",
      period: "2022 - Present",
      stats: {
        reach: "10K+",
        engagement: "85%"
      },
      details: "Building personal brand and thought leadership in IT recruitment."
    }
  ];

  return (
    <ExperienceSection id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </Title>

        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedExperience(index)}
              whileHover={{ scale: 1.05 }}
            >
              <Company>{exp.company}</Company>
              <Period>{exp.period}</Period>
              <Stats>
                {Object.entries(exp.stats).map(([key, value]) => (
                  <StatItem key={key}>
                    <StatValue>{value}</StatValue>
                    <StatLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</StatLabel>
                  </StatItem>
                ))}
              </Stats>
            </ExperienceCard>
          ))}
        </ExperienceGrid>

        <AnimatePresence>
          {selectedExperience !== null && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedExperience(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedExperience(null)}>×</CloseButton>
                <Company>{experiences[selectedExperience].company}</Company>
                <Period>{experiences[selectedExperience].period}</Period>
                <p>{experiences[selectedExperience].details}</p>
                <Stats>
                  {Object.entries(experiences[selectedExperience].stats).map(([key, value]) => (
                    <StatItem key={key}>
                      <StatValue>{value}</StatValue>
                      <StatLabel>{key.charAt(0).toUpperCase() + key.slice(1)}</StatLabel>
                    </StatItem>
                  ))}
                </Stats>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </ExperienceSection>
  );
};

export default Experience; 