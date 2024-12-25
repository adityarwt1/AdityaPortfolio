import QR from '../assets/qr.38.25.svg';
import WhatsAppLogo from '../assets/whatsapp.svg'; // Make sure to import the WhatsApp logo
import Twittericon from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Instagram from "../assets/instagram.svg";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css';

gsap.registerPlugin(ScrollTrigger);

const FreelancingPage = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".card",
        start: "top 100%",
        end: "bottom top",
        scrub: 5,
        once: true, // Ensure the animation runs only once
      }
    });

    tl.fromTo(".card", 
      { x: "-100%", rotation: 10, opacity: 0 }, 
      { x: "0%", rotation: 0, opacity: 1, duration: 1 }
    )
    .to(".card", 
      { x: "100%", rotation: 10, opacity: 0, duration: 1 }
    );
  }, []);

  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center bg-black p-4 overflow-hidden">
      <div className="card shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-white pt-7">Contact Me</h1>
        <div className="flex flex-col items-center">
          <img 
            src={QR} 
            alt="WhatsApp QR Code" 
            className="m-4 w-48 h-48 object-cover rounded-md"
          />
          <p className="text-base mb-2 text-white flex items-center w-full justify-center m-10">
            <span className="inline-block">Scan the QR code to contact me on <img 
              src={WhatsAppLogo} 
              alt="WhatsApp Logo" 
              className="mr-2 inline-block"
              style={{ width: '1em', height: '1em' }}
            />WhatsApp</span>
          </p>
          <p className="text-2xl font-semibold text-white">and</p>
          <p className="text-4xl font-bold text-white">Social Media</p>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://x.com/aditya_rwt1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twittericon} alt="Twitter" className="w-8 h-8 invert" />
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rawat-3862182b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 duration-300 invert hover:bg-[#0A66C2] hover:invert-0 rounded-md" />
            </a>
            <a
              href="https://github.com/adityarwt1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHub} alt="GitHub" className="w-8 h-8 invert" />
            </a>
            <a
              href="https://www.instagram.com/aditya_rwt1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" className="w-8 h-8 invert" />
            </a>
          </div>
          <p className="text-base mt-2 text-white pt-4 pb-4">Call me at: <span className="font-bold text-4xl">+91 9244524565</span></p>
        </div>
      </div>
    </div>
  );  
};

export default FreelancingPage;
