import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaUsers,
  FaPenNib,
  FaYoutube,
  FaImage,
  FaRocket,
  FaGlobe
} from "react-icons/fa";

import {
  SiFigma,
  SiCanva,
  SiGoogleanalytics
} from "react-icons/si";

import "./Services.css";


export default function Services() {


const servicesData = [
  {
    id: 1,
    icon: <FaGlobe color="#2563eb" />,
    title: "Website Development",
    description:
      "Creating modern, responsive, and professional websites for businesses, portfolios, organizations, and personal brands."
  },

  {
    id: 2,
    icon: <FaLaptopCode color="#7c3aed" />,
    title: "Web Application Development",
    description:
      "Building interactive web applications with modern technologies, responsive interfaces, and useful features based on your requirements."
  },

  {
    id: 3,
    icon: <SiFigma color="#f24e1e" />,
    title: "UI/UX Design",
    description:
      "Designing clean and user-friendly interfaces, layouts, wireframes, prototypes, and digital experiences."
  },

  {
    id: 4,
    icon: <FaPaintBrush color="#ec4899" />,
    title: "Banner & Graphic Design",
    description:
      "Creating attractive banners, promotional graphics, social media posts, advertisements, and other digital visuals."
  },

  {
    id: 5,
    icon: <FaBullhorn color="#f59e0b" />,
    title: "Influencer Marketing",
    description:
      "Connecting brands with relevant influencers and helping manage promotional campaigns to increase brand awareness and engagement."
  },

  {
    id: 6,
    icon: <FaUsers color="#1877f2" />,
    title: "Social Media Management",
    description:
      "Helping manage social media pages through content planning, posting, audience engagement, and basic growth activities."
  },

 
  {
    id: 7,
    icon: <FaYoutube color="#ff0000" />,
    title: "YouTube Management",
    description:
      "Helping manage YouTube channels through content uploads, basic channel optimization, organization, and audience engagement."
  },

  {
    id: 8,
    icon: <FaImage color="#14b8a6" />,
    title: "Thumbnail Design",
    description:
      "Creating attractive and engaging thumbnails designed to improve the visual presentation of YouTube and social media content."
  },

  {
    id: 9,
    icon: <FaRocket color="#16a34a" />,
    title: "Performance Optimization",
    description:
      "Improving website loading speed, responsiveness, accessibility, and overall user experience."
  },

  {
    id: 10,
    icon: <SiCanva color="#00c4cc" />,
    title: "Brand Identity",
    description:
      "Creating basic brand identity materials including logos, colors, typography, and visual elements for a consistent brand presence."
  },

  {
    id: 11,
    icon: <SiGoogleanalytics color="#e37400" />,
    title: "Basic SEO Optimization",
    description:
      "Applying basic SEO practices such as page titles, meta descriptions, headings, image optimization, and search-friendly website structure."
  }
];



return (

<section id="services" className="services-section">


<div className="services-container">


<motion.div

className="services-header"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>


<h2 className="services-title">

Digital Solutions That Help Businesses Grow

</h2>



<p className="services-subtitle">

I create scalable digital solutions by combining modern web development,
UI/UX design, branding, and digital marketing strategies.
From websites and web applications to creative designs and growth-focused
marketing, I help businesses build strong online identities and achieve
measurable success.

</p>


</motion.div>




<div className="services-grid">


{
servicesData.map((service,index)=>(


<motion.div

className="service-card"

key={service.id}


initial={{
opacity:0,
y:50
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.5,
delay:index*0.05
}}



whileHover={{
scale:1.05,
y:-8
}}


>


<div className="service-icon-container">

{service.icon}

</div>



<h3 className="service-card-title">

{service.title}

</h3>



<p className="service-card-description">

{service.description}

</p>


</motion.div>


))

}


</div>



</div>


</section>


);

}