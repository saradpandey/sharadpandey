import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCalendarAlt
} from 'react-icons/fa';

import profileImg from '../../assets/image.jpeg';
import cvFile from '../../assets/Sharad_Pandey_CV.pdf';
import './About.css';

export default function About() {
  const profileInfo = [
    { icon: <FaUser />, label: 'Name', value: 'Sharad Pandey' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Kathmandu, Nepal' },
    { icon: <FaEnvelope />, label: 'Email', value: 'pandeysharad9719@gmail.com' },
    {
      icon: <FaGraduationCap />,
      label: 'Degree',
      value: 'Bachelor of Computer Systems & Information Technology (BCSIT)'
    },
    {
      icon: <FaGraduationCap />,
      label: 'University',
      value: 'Pokhara University'
    },
    {
      icon: <FaGraduationCap />,
      label: 'College',
      value: 'Liberty College'
    },
    { icon: <FaBriefcase />, label: 'Experience', value: '2+ Years' },
    { icon: <FaCalendarAlt />, label: 'Availability', value: 'Available for Work' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-content">
          {/* <p className="section-subtitle">About Me</p> */}

          <h2 className="section-title">
            Get To Know Me
          </h2>

          <p className="about-text">
            Hello! I'm Sharad Pandey, a passionate Digital Solutions Consultant,  Web Developer, Frontend Developer and
            BCSIT student who enjoys creating modern, responsive,
            and user-friendly web applications.
          </p>

          <p className="about-text">
            I specialize in building attractive and high-performance
            websites using React.js, JavaScript, Bootstrap, HTML, Tailwind css, and CSS.
            I am always eager to learn new technologies and improve my skills.
          </p>

          <p className="about-text">
            Alongside web development and Digital Solutions Consultant , I have experience working as a
            Documentation Officer, where I developed strong organizational,
            communication, and problem-solving abilities.
          </p>

          {/* DOWNLOAD CV BUTTON */}
          <motion.a
            href={cvFile}
            download="Sharad_Pandey_CV.pdf"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-visual">
          <div className="about-image-card">
            <img
              src={profileImg}
              alt="Sharad Pandey"
            />
          </div>
        </div>

      </div>

      {/* INFO GRID */}
      <motion.div
        className="info-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          },
          hidden: {}
        }}
      >
        {profileInfo.map((info, idx) => (
          <motion.div
            className="info-card"
            key={idx}
            variants={{
              hidden: {
                opacity: 0,
                y: 20
              },
              visible: {
                opacity: 1,
                y: 0
              }
            }}
            whileHover={{
              y: -5
            }}
          >
            <div className="info-icon">
              {info.icon}
            </div>

            <div className="info-meta">
              <span>{info.label}</span>
              <p>{info.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
