import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useCallback } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import type { ISourceOptions } from "@tsparticles/engine";

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #ffd700 0%, #ff69b4 100%);
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.3;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #34495e;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const ContactInfo = styled(motion.div)`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const BackgroundVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Hero = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig: ISourceOptions = {
    fullScreen: {
      enable: false,
      zIndex: 1
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3,
        animation: {
          enable: true,
          speed: 2
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        straight: false,
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: {
          enable: true
        }
      }
    },
    retina_detect: true
  };

  useEffect(() => {
    if (particlesRef.current) {
      tsParticles.load({
        id: "tsparticles",
        options: particlesConfig
      });
    }
  }, [particlesConfig]);

  useEffect(() => {
    // GSAP animation for name
    gsap.from(nameRef.current?.children || [], {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // GSAP animation for title
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });
  }, []);

  return (
    <HeroSection>
      <VideoBackground>
        <BackgroundVideo autoPlay loop muted playsInline>
          <source src={process.env.PUBLIC_URL + '/assets/tech-background.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
      </VideoBackground>

      <ParticlesContainer id="tsparticles" ref={particlesRef} />

      <Content>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Giang Nguyen
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IT Recruitment Consultant
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connecting Top Talent with Great Opportunities
        </motion.p>
      </Content>

      <ContactInfo
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div>+84 76897 5267</div>
        <div>giangkimnguyen16@gmail.com</div>
        <div>Binh Thanh, HCMC</div>
        <div>in/kimgiangbusiness</div>
      </ContactInfo>
    </HeroSection>
  );
};

export default Hero; 