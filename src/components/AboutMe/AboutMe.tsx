import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 6rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  color: var(--text-color);
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: var(--title-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Quote = styled(motion.div)`
  font-size: 1.2rem;
  font-style: italic;
  margin: 2rem 0;
  padding: 1rem;
  border-left: 4px solid;
  border-image: var(--primary-gradient) 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0 4px 4px 0;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(45deg, rgba(255, 247, 173, 0.2), rgba(255, 169, 249, 0.2));
  box-shadow: 0 0 20px rgba(255, 167, 249, 0.15);

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  transform: scale(1.02);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SVGPath = styled(motion.svg)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const AboutMe: React.FC = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </Title>

          <Paragraph
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Started in Recruitment 360 with a passion for connecting talented individuals
            with their dream careers. Now, I&apos;m focusing on building strong recruitment
            expertise in the IT industry, helping companies find the perfect tech talent
            and candidates discover their ideal roles.
          </Paragraph>

          <Quote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            &quot;Headhunting aligns with my strengths - connecting people, understanding
            their aspirations, and creating meaningful matches that drive success.&quot;
          </Quote>

          <Paragraph
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            With a strong foundation in marketing and a deep understanding of the tech
            industry, I bring a unique perspective to IT recruitment. My approach
            combines data-driven insights with personalized attention to ensure the
            best possible outcomes for both clients and candidates.
          </Paragraph>
        </Content>

        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImage 
            src={process.env.PUBLIC_URL + '/assets/profile.jpg'} 
            alt="Profile" 
          />
          <SVGPath
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff7ad" />
                <stop offset="100%" stopColor="#ffa9f9" />
              </linearGradient>
            </defs>
          </SVGPath>
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default AboutMe;