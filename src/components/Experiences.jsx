import { motion } from 'framer-motion';
import './Experiences.css';

export default function Experience() {
  const experiences = [
    {

  role: 'UI/UX Designer & Digital Content Creator',
  company: 'Freelance / Self Employed',
  period: '2026 - Present',
  points: [
    'Designed modern UI/UX interfaces for websites, web applications, and digital products.',
    'Created social media designs for platforms like Facebook, YouTube, Instagram, and other digital channels.',
    'Designed professional thumbnails, banners, posters, and promotional graphics to improve user engagement.',
    'Analyzed design problems and created user-friendly solutions based on user needs.',
    'Improved digital experiences by focusing on usability, accessibility, and visual consistency.',
    'Created wireframes, prototypes, and design concepts using modern design tools.',
    'Designed branding materials including logos, social media posts, and marketing assets.',
    'Collaborated with clients to understand requirements and transform ideas into creative solutions.',
    'Applied design principles including typography, color theory, spacing, and visual hierarchy.',
    'Optimized graphics and content designs for better performance across different platforms.',
    'Researched user behavior and competitor designs to improve product experience.',
    'Solved visual communication problems through creative and strategic design approaches.'
  
      ]
    },
    {
      role: 'Documentation Officer',
      company: 'Magna Education',
      period: '2025 - 2026',
      points: [
        'Managed daily documentation and administrative records.',
        'Prepared official reports, letters, and institutional documents.',
        'Maintained accurate student and organizational databases.',
        'Verified and updated records to ensure data accuracy.',
        'Handled document filing, organization, and retrieval processes.',
        'Assisted students and visitors with inquiries and information.',
        'Coordinated with staff members for documentation requirements.',
        'Managed digital and physical record-keeping systems.',
        'Supported office operations and administrative activities.',
        'Ensured confidentiality and security of important documents.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Sahuji',
      period: '2024 - 2025',
      points: [
        'Developed responsive websites using HTML, CSS, JavaScript, and React.',
        'Converted UI/UX designs into functional web applications.',
        'Created reusable and maintainable React components.',
        'Implemented modern layouts using Flexbox and CSS Grid.',
        'Optimized website performance and loading speed.',
        'Tested websites across multiple browsers and devices.',
        'Fixed bugs and resolved frontend issues efficiently.',
        'Integrated REST APIs and dynamic data rendering.',
        'Collaborated with designers and developers during project development.',
        'Improved user experience through interactive and accessible interfaces.',
        'Used Git and GitHub for version control and collaboration.',
        'Ensured websites were mobile-friendly and SEO optimized.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-wrapper">
        {/* <p className="section-subtitle">Experience</p> */}
        <h2 className="section-title">My Experience</h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
              </div>

              <motion.div
                className="timeline-card"
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -30 : 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}
              >
                <div className="card-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <ul className="points-list">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}