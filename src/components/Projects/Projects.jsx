import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: 'NEPALIUM',
      type: 'E-commerce Website',
      desc: 'A modern multi-vendor e-commerce platform built with React, Node.js, Express.js, and MongoDB. It features secure authentication, product management, shopping cart, and responsive UI.',
      tags: [
        'HTML',
        'Tailwind',
        'React',
        'Bootstrap',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB'
      ],
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop',
      live: 'https://nepal-emporium-hub.lovable.app/'
    },
    {
      title: 'Portfolio Website',
      type: 'Personal Portfolio',
      desc: 'A responsive personal portfolio showcasing my skills, services, projects, and contact information with modern UI and smooth animations.',
      tags: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Tailwind',
        'React',
        'JavaScript'
      ],
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=500&auto=format&fit=crop',
      live: 'https://sharadpandey.com.np/'
    },
    {
      title: 'University App',
      type: 'Web Application',
      desc: 'A university management system that allows students, teachers, and administrators to manage academic activities efficiently.',
      tags: [
        'HTML',
        'CSS',
        'Bootstrap',
        'Tailwind',
        'React',
        'JavaScript',
        'Node.js',
        'Express.js',
        'MongoDB'
      ],
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500&auto=format&fit=crop',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrapper">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">
          {projectList.map((proj, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image-wrapper">
                <img src={proj.image} alt={proj.title} />
              </div>

              <div className="project-body">
                <span className="proj-type">{proj.type}</span>

                <h3>{proj.title}</h3>

                <p className="proj-desc">{proj.desc}</p>

                <div className="proj-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx}>{tag}</span>
                  ))}
                </div>

                <div className="proj-actions">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    View Live Project <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}