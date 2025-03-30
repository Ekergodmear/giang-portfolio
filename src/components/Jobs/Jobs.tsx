import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const JobsSection = styled.section`
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

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Tab = styled(motion.button)<{ $active: boolean }>`
  padding: 0.5rem 2rem;
  border-radius: 25px;
  background: ${props => props.$active ? 'var(--primary-gradient)' : 'rgba(255, 255, 255, 0.1)'};
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: none;

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
    opacity: 0.5;
  }
`;

const JobsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const JobCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  perspective: 1000px;
  min-height: 150px;
  display: flex;
  flex-direction: column;

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

const JobTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
  padding-right: 100px;
`;

const JobDetails = styled.div`
  font-size: 1rem;
  color: var(--text-color-light);
  margin-bottom: 1rem;
`;

const OfferBadge = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--primary-gradient);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(255, 167, 249, 0.3);
  z-index: 2;
  white-space: nowrap;
`;

const JobDescription = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  color: var(--text-color);
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Jobs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'IT' | 'Non-IT'>('IT');
  const [showFireworks, setShowFireworks] = useState(false);

  const jobs = {
    IT: [
      {
        title: 'Senior Game Designer',
        details: '3 offers available',
        description: 'Leading game design initiatives and mentoring junior designers.'
      },
      {
        title: 'Senior QA – Game Tester',
        details: '2 offers available',
        description: 'Ensuring game quality and implementing testing strategies.'
      },
      {
        title: 'Game Developer',
        details: '5 offers available',
        description: 'Developing high-quality game features and mechanics.'
      }
    ],
    'Non-IT': [
      {
        title: 'Marketing Manager',
        details: '2 offers available',
        description: 'Leading marketing campaigns and brand development.'
      },
      {
        title: 'Business Analyst',
        details: '3 offers available',
        description: 'Analyzing business processes and recommending improvements.'
      }
    ]
  };

  const handleOfferClick = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000);
  };

  return (
    <JobsSection id="jobs">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Some Jobs I Have Experienced
        </Title>

        <FilterTabs>
          <Tab
            $active={activeTab === 'IT'}
            onClick={() => setActiveTab('IT')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            IT
          </Tab>
          <Tab
            $active={activeTab === 'Non-IT'}
            onClick={() => setActiveTab('Non-IT')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Non-IT
          </Tab>
        </FilterTabs>

        <JobsGrid>
          {jobs[activeTab].map((job, index) => (
            <JobCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotateY: 180 }}
            >
              <JobTitle>{job.title}</JobTitle>
              <JobDetails>{job.details}</JobDetails>
              <OfferBadge
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleOfferClick}
              >
                ✨ Offers
              </OfferBadge>
              <JobDescription>
                {job.description}
              </JobDescription>
            </JobCard>
          ))}
        </JobsGrid>

        {showFireworks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1000,
              background: 'radial-gradient(circle at center, rgba(255, 167, 249, 0.2) 0%, rgba(255, 247, 173, 0.2) 100%)'
            }}
          />
        )}
      </Container>
    </JobsSection>
  );
};

export default Jobs; 