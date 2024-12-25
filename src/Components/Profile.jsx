import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';
import Twittericon from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import EmailIcon from "../assets/gmail.svg";
import LocationIcon from "../assets/location.svg";
import WorkIcon from "../assets/work.svg";
import ExperienceIcon from "../assets/experience.svg";
import LanguageIcon from "../assets/language.svg";
import ExEmployIcon from "../assets/exemploy.svg";
import { Element, Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const leftElementsRef = useRef([]);
  const rightElementsRef = useRef([]);

  useEffect(() => {
    leftElementsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2, // Add stagger effect
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse" // Animation runs forward and backward
          }
        }
      );
    });

    rightElementsRef.current.forEach((el, index) => {
      gsap.fromTo(el,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2, // Add stagger effect
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse" // Animation runs forward and backward
          }
        }
      );
    });
  }, []);

  return (
    <Element id='profille' name="profile-section" className="bg-black text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center mt-4 text-white">
        <h1 className="text-3xl mt-4 shining-text font-extrabold">ADITYA RAWAT</h1>
        <div className="flex flex-wrap justify-center mt-4">
          <div ref={(el) => leftElementsRef.current[0] = el} className="w-full sm:w-1/2 p-2 left-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={EmailIcon} alt="Email" className="inline w-4 h-4 mr-2 invert" />
              Email: adityarawatnew247@gmail.com
            </p>
          </div>
          <div ref={(el) => rightElementsRef.current[0] = el} className="w-full sm:w-1/2 p-2 right-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={LocationIcon} alt="Location" className="inline w-4 h-4 mr-2 invert" />
              Location: SIDHI, MP, INDIA
            </p>
          </div>
          <div ref={(el) => leftElementsRef.current[1] = el} className="w-full sm:w-1/2 p-2 left-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={WorkIcon} alt="Work" className="inline w-4 h-4 mr-2 invert" />
              Work: FullStack Developer (MERN)
            </p>
          </div>
          <div ref={(el) => rightElementsRef.current[1] = el} className="w-full sm:w-1/2 p-2 right-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={ExperienceIcon} alt="Experience" className="inline w-4 h-4 mr-2 invert" />
              Experience: 2+ years
            </p>
          </div>
          <div ref={(el) => leftElementsRef.current[2] = el} className="w-full sm:w-1/2 p-2 left-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={LanguageIcon} alt="Language" className="inline w-4 h-4 mr-2 invert" />
              Main Programming Language: JavaScript/Python
            </p>
          </div>
          <div ref={(el) => rightElementsRef.current[2] = el} className="w-full sm:w-1/2 p-2 right-element">
            <p className="myblurybg p-4 rounded-md text-center text-white">
              <img src={ExEmployIcon} alt="ExEmploy" className="inline w-4 h-4 mr-2 invert" />
              Ex-Employee of HelloAR (1 Year)
            </p>
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          <a
            href="https://x.com/aditya_rwt1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img src={Twittericon} alt="Twitter" className="w-8 h-8 invert" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-rawat-3862182b0/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 duration-300 invert hover:bg-[#0A66C2] hover:invert-0 rounded-md" />
          </a>
          <a
            href="https://github.com/adityarwt1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={GitHub} alt="GitHub" className="w-8 h-8 invert" />
          </a>
          <a
            href="https://www.instagram.com/aditya_rwt1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={Instagram} alt="Instagram" className="w-8 h-8 invert" />
          </a>
        </div>
        <div className="flex mt-4 space-x-4 text-white">
          <Link to="projects-section" smooth={true} duration={500} className="cursor-pointer text-blue-500">
            Projects
          </Link>
          <Link to="contact-section" smooth={true} duration={500} className="cursor-pointer text-blue-500">
            Contact/Freelancing
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default Profile;