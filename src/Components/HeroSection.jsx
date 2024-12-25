import { useState, useEffect } from 'react';
import Mongodb from '../assets/mongodb.svg';
import ExpressJS from '../assets/expressjs.svg';
import ReactJS from '../assets/react.svg';
import NodeJS from '../assets/nodejs.svg';
import TypedJS from './TypedJS';
import { Link, Element } from 'react-scroll';
import '../App.css';

const images = [Mongodb, ExpressJS, ReactJS, NodeJS];
const glowColors = ['#13AA52', '#FFFFFF', '#61DAFB', '#8CC84B'];
const mernLetters = ['M', 'E', 'R', 'N'];
const letterColors = {
  M: '#13AA52',
  E: '#FFFFFF',
  R: '#61DAFB',
  N: '#8CC84B'
};
const popUpTexts = {
  M: 'MongoDB: The Database',
  E: 'ExpressJS: The Backend Framework',
  R: 'ReactJS: The Frontend Library',
  N: 'NodeJS: The Backend Runtime'
};

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setOpacity(1);
      }, 500); // Duration of the fade-out transition
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Element id='home' name="hero-section" className="-z-30 flex h-screen mybgcolor justify-center items-center overflow-hidden">
      <div className="flex items-center flex-col md:flex-row text-center md:text-left w-full">
        <div className="md:w-1/2 p-4 md:text-left text-center ml-72 h-fit">
          <h1 className="text-4xl font-bold mb-4 text-white">Hi, I&apos;m ADITYA</h1>
          <p className="text-xl mb-4 text-white">I am a professional web developer specializing in <span style={{ color: letterColors.M }}>M</span><span style={{ color: letterColors.E }}>E</span><span style={{ color: letterColors.R }}>R</span><span style={{ color: letterColors.N }}>N</span> stack.</p>
          <p className="text-lg text-white">I am a full stack developer with 2+ years of experience, creating dynamic and attractive websites.</p>
          <div className="w-full flex text-lg text-white">Language <TypedJS /></div>
          <div className="mt-4">
            <Link to="projects-section" smooth={true} duration={500} className="blurry-button font-bold">PROJECTS</Link>
            <Link to="profile-section" smooth={true} duration={500} className="blurry-button font-bold ml-4">PROFILE</Link>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-center items-center relative">
          <img 
            src={images[currentImage]} 
            alt="MERN Developer" 
            className={`w-full h-64 transition-opacity duration-500 ${currentImage === 2 ? 'spin' : ''}`} 
            style={{ 
              filter: `drop-shadow(0 0 20px ${glowColors[currentImage]})`, 
              opacity 
            }} 
          />
          <div className="text-4xl font-extrabold mt-4 ml-2.5 " style={{ filter: `drop-shadow(0 0 10px ${glowColors[currentImage]})` }}>
            {mernLetters.map((letter, index) => (
              <span key={index} className="text-4xl" style={{ color: letterColors[letter], opacity: index <= currentImage ? 1 : 0.3 }}>
                {letter}
              </span>
            ))}
          </div>
          <div className="popup mt-2 p-2 rounded text-2xl transition-opacity duration-500" style={{ color: glowColors[currentImage], backgroundColor: 'black', opacity, zIndex: 10 }}>
            {popUpTexts[mernLetters[currentImage]]}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default HeroSection;