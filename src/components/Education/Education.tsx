import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useState } from 'react';

const EducationSection = styled.section`
  padding: 6rem 2rem;
  background: rgba(255, 255, 255, 0.05);
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary-gradient);
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 50%;
  padding-right: 3rem;

  &:nth-child(even) {
    margin-left: 50%;
    padding-right: 0;
    padding-left: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    right: -6px;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--primary-gradient);
    box-shadow: 0 0 10px rgba(255, 167, 249, 0.5);
  }

  &:nth-child(even)::before {
    right: auto;
    left: -6px;
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--primary-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }
`;

const School = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
`;

const Period = styled.div`
  font-size: 1rem;
  color: var(--text-color-light);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-color);
`;

const Badge = styled(motion.div)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--primary-gradient);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(255, 167, 249, 0.3);
`;

const Education: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBadgeClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <EducationSection id="education">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </Title>

        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TimelineContent>
              <School>UEH University</School>
              <Period>2019 - 2023</Period>
              <Description>
                Bachelor&apos;s Degree in Marketing
              </Description>
              <Badge
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBadgeClick}
              >
                🏆 Scholarships
              </Badge>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TimelineContent>
              <School>OAC Academy</School>
              <Period>02/2022 - 05/2022</Period>
              <Description>
                Recruitment Consultant 360
              </Description>
              <Badge
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleBadgeClick}
              >
                🎯 Research Prize
              </Badge>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
            colors={['#fff7ad', '#ffa9f9', '#ffffff']}
            onConfettiComplete={() => setShowConfetti(false)}
          />
        )}
      </Container>
    </EducationSection>
  );
};

export default Education; 