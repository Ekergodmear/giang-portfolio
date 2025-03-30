import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.svg';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
`;

const LogoWrapper = styled(motion.div)`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-gradient);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.3s ease;
  }

  &:active {
    transform: translateY(0);
  }
`;

const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        } else {
          headerRef.current.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer ref={headerRef}>
      <LogoWrapper
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={logo} alt="Logo" />
      </LogoWrapper>
      <Nav>
        <StyledLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </StyledLink>
        <StyledLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Skills
        </StyledLink>
        <StyledLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Experience
        </StyledLink>
        <StyledLink
          to="education"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Education
        </StyledLink>
        <StyledLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 