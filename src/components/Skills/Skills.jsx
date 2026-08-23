import { motion } from 'framer-motion';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaRocket,
  FaChartLine,
  FaYoutube,
  FaFacebook,
  FaPalette,
  FaPenNib
} from 'react-icons/fa';

import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFigma,
  SiCanva,
  SiGoogleanalytics,
  SiNextdotjs
} from 'react-icons/si';

import './Skills.css';


export default function Skills() {

  const skillsData = [

    // Frontend Development
    { name: 'HTML5', level: 95, icon: <FaHtml5 color="#e34f26" /> },
    { name: 'CSS3', level: 90, icon: <FaCss3Alt color="#1572b6" /> },
    { name: 'JavaScript', level: 85, icon: <FaJs color="#f7df1e" /> },
    { name: 'React JS', level: 85, icon: <FaReact color="#61dafb" /> },
    { name: 'Bootstrap', level: 90, icon: <FaBootstrap color="#7952b3" /> },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss color="#06b6d4" /> },


    // Backend & Database
    { name: 'Node JS', level: 75, icon: <FaNodeJs color="#339933" /> },
    { name: 'Express JS', level: 70, icon: <SiExpress color="#000" /> },
    { name: 'SQL Database', level: 70, icon: <SiMysql color="#4479A1" /> },


    // UI/UX & Graphic Design
    { name: 'Figma UI/UX', level: 90, icon: <SiFigma color="#F24E1E" /> },
    { name: 'Canva Design', level: 90, icon: <SiCanva color="#00C4CC" /> },
    { name: 'Brand Design', level: 80, icon: <FaPalette color="#ff6b6b" /> },
    { name: 'Content Design', level: 85, icon: <FaPenNib color="#8b5cf6" /> },


        // Social Media & YouTube
    { name: 'YouTube Management', level: 80, icon: <FaYoutube color="#FF0000" /> },
    { name: 'Social Media', level: 80, icon: <FaFacebook color="#1877F2" /> },


    // Development Tools
    { name: 'GitHub', level: 80, icon: <FaGithub color="#24292e" /> },

  ];


  return (
    <section id="skills" className="skills-section">

      <div className="skills-wrapper">

        <h2 className="section-title">
          Technologies & Tools I Use
        </h2>

        <p className="skills-intro-text">
          Modern technologies, creative tools, and digital strategies I use to build websites,
          applications, designs, and online solutions.
        </p>


        <div className="skills-container">


          {/* Progress Bars */}
          <div className="skills-progress-col">

            {skillsData.map((skill,index)=>(

              <div className="progress-item" key={index}>

                <div className="progress-meta">

                  <span className="skill-name">
                    {skill.name}
                  </span>

                  <span className="skill-percentage">
                    {skill.level}%
                  </span>

                </div>


                <div className="bar-bg">

                  <motion.div

                    className="bar-fill"

                    initial={{width:0}}

                    whileInView={{
                      width:`${skill.level}%`
                    }}

                    viewport={{
                      once:true
                    }}

                    transition={{
                      duration:1,
                      ease:"easeOut"
                    }}

                  />

                </div>


              </div>

            ))}

          </div>



          {/* Skill Cards */}

          <div className="skills-grid-col">

            {skillsData.map((skill,index)=>(

              <motion.div

                className="skill-icon-card"

                key={index}

                whileHover={{
                  scale:1.08,
                  y:-5
                }}

                transition={{
                  type:"spring",
                  stiffness:300
                }}

              >

                <div className="card-icon-wrapper">
                  {skill.icon}
                </div>

                <h4>
                  {skill.name}
                </h4>


              </motion.div>

            ))}

          </div>


        </div>


      </div>

    </section>
  );
}