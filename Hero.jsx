import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaDownload
} from 'react-icons/fa';
import {
  SiCodeforces,
  SiJavascript,
  SiReact,
  SiBootstrap
} from 'react-icons/si';
import { HiArrowUpRight } from 'react-icons/hi2';
import { BsWhatsapp } from 'react-icons/bs';

import './Hero.css';

import profileImg from '../../assets/image.jpeg';
import cvFile from '../../assets/Sharad_Pandey_CV.pdf';

export default function Hero() {

  const roles = [
    
  { text: "Digital Solutions Consultant", color: "#ec4899" },
  { text: "Web Developer", color: "#14b8a6" },
  { text: "Frontend Developer", color: "#16a34a" },
  { text: "Freelancer", color: "#3b82f6" },
  { text: "Designer", color: "#8b5cf6" },
  { text: "BCSIT Student", color: "#f97316" }

  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // COUNTER ANIMATION (run once)
  const [counts, setCounts] = useState({
    exp: 0,
    projects: 0,
    tech: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => {
        const next = { ...prev };

        if (next.exp < 2) next.exp += 1;
        if (next.projects < 20) next.projects += 1;
        if (next.tech < 10) next.tech += 1;
        if (next.satisfaction < 100) next.satisfaction += 5;

        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // TYPEWRITER
  useEffect(() => {
    const currentRole = roles[roleIndex].text;
    let timeout;

    if (!deleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    } else {
      timeout = setTimeout(() => {
        if (!deleting) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }
      }, deleting ? 60 : 100);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section id="home" className="hero-section">

      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-info">

          <motion.p className="hero-greeting">
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero-name">
            SHARAD <span className="highlight">PANDEY</span>
          </motion.h1>

          <motion.h2 className="hero-role">
            <span style={{ color: roles[roleIndex].color }}>
              {text}
            </span>
          </motion.h2>

          <motion.p className="hero-desc">
            I build responsive, modern, and user-friendly websites that help businesses grow and stand out.
          </motion.p>

          <motion.div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Hire Me <HiArrowUpRight />
            </a>

            <a href={cvFile} download className="btn-secondary">
              Download CV <FaDownload />
            </a>
          </motion.div>

          {/* SOCIAL */}
          <div className="hero-socials">
            <p>Follow Me</p>

            <div className="social-icons">

              <a href="https://wa.me/9779749781949?text=Hi%20Sharad%20I%20want%20to%20connect"
                target="_blank" rel="noreferrer">
                <BsWhatsapp />
              </a>

              <a href="https://www.linkedin.com/in/sarad-pandey-7b8a4940a/"
                target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>

              <a href="https://www.facebook.com/palpali.sarad/"
                target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>

              <a href="https://www.instagram.com/saradpandey78/"
                target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="hero-graphics">

          <motion.div className="avatar-wrapper">

            <motion.div
              className="main-avatar"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              <img src={profileImg} alt="Sharad Pandey" />
            </motion.div>

            <motion.div className="floating-badge b-1">
              <SiCodeforces />
            </motion.div>

            <motion.div className="floating-badge b-2 react-badge">
              <SiReact />
            </motion.div>

            <motion.div className="floating-badge b-3">
              <SiJavascript />
            </motion.div>

            <motion.div className="floating-badge b-4">
              <SiBootstrap />
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* METRICS */}
      <div className="metrics-bar">

        <div className="metric-item">
          <h3>{counts.exp}+</h3>
          <p>Years Experience</p>
        </div>

        <div className="metric-item">
          <h3>{counts.projects}+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="metric-item">
          <h3>{counts.tech}+</h3>
          <p>Technologies</p>
        </div>

        <div className="metric-item">
          <h3>{counts.satisfaction}%</h3>
          <p>Client Satisfaction</p>
        </div>

      </div>

    </section>
  );
}