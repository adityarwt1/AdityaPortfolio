import '../App.css';
import Ecommerce from '../assets/ecommerce.jpg';
import bmw from '../assets/bmw.png';
import Dropshiping from '../assets/dropshipping.jpg';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-commerce Platform Development',
    description: 'A comprehensive e-commerce platform designed to enhance online shopping experiences.',
    link: '#',
    image: Ecommerce,
    extraInfo: 'Technologies used: React, Node.js, MongoDB. This project involved creating a scalable and secure e-commerce platform with features such as user authentication, product management, shopping cart, and payment integration. The platform is designed to handle high traffic and provide a seamless shopping experience for users. Additionally, it includes an admin dashboard for managing products, orders, and users.'
  },
  {
    title: 'BMW Showcase Website',
    description: 'A sleek and modern website showcasing BMW’s latest models and innovations.',
    link: '#',
    image: bmw,
    extraInfo: 'Technologies used: HTML, CSS, JavaScript. This project focused on creating a visually appealing and responsive website to highlight BMW’s latest car models and technological advancements. The website features high-quality images, detailed specifications, and interactive elements to engage visitors. It also includes a contact form for potential customers to inquire about the vehicles and schedule test drives.'
  },
  {
    title: 'Dropshipping Business',
    description: 'An efficient dropshipping platform to streamline product sourcing and delivery.',
    link: '#',
    image: Dropshiping,
    extraInfo: 'Technologies used: Shopify, Liquid, GraphQL. This project aimed to develop a dropshipping platform that simplifies the process of sourcing products from suppliers and delivering them to customers. The platform integrates with multiple suppliers, automates order processing, and provides real-time inventory updates. It also includes features such as product search, order tracking, and customer support to ensure a smooth and efficient dropshipping experience.'
  }
];

const Projects = () => {

  useEffect(() => {
    gsap.utils.toArray('.project-card').forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            toggleActions: 'play none none reverse',
            onEnter: () => gsap.to(card, { opacity: 1, y: 0, duration: 1, delay: index * 0.2 }),
            onLeaveBack: () => gsap.to(card, { opacity: 0, y: 50, duration: 1 })
          }
        }
      );
    });
  }, []);

  return ( 
    <section className="projects-section py-8 mybgcolor text-white h-screen overflow-hidden">
      <h2 className="section-title text-3xl font-extrabold text-center mb-8 ">MY PROJECTS</h2>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 h-96">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-gray-100 p-6 rounded-lg shadow-md backdrop-blur-sm bg-opacity-20 h-auto">
            <img src={project.image} alt={project.title} className="project-image w-full h-72 object-cover rounded-2xl mb-4 shine-effect" />
            <h3 className="project-title text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="project-description mb-4 text-white">{project.description}</p>
            <a href={project.link} className="blurry-button ">View Project</a>
            <p className="project-extra-info mt-4 text-white">{project.extraInfo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
