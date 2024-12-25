import '../App.css';
import ProfileLogo from '../assets/logo.jpg';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaDiscord } from 'react-icons/fa'; // Importing Font Awesome icons
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className=" z-40 flex justify-between items-center p-4 mybgcolor text-white overflow-hidden" >
      <div className="flex left-section w-full justify-center">
        <h1 className=" font-bold hover:cursor-pointer text-4xl shining-text">Mr. ADITYA RAWAT</h1>
      </div>
      <div className="right-section flex items-center w-full justify-end mr-52">
        <img 
          src={ProfileLogo} 
          alt="Profile Logo" 
          className="w-10 h-10 rounded-full mr-4 ml-1"
        />
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={toggleDropdown} 
            className="flex items-center justify-center"
          >
            <FaChevronDown className={`arrow-icon ${isOpen ? 'open' : ''} invert`} /> {/* Arrow icon */}
          </button>
          <div className={`  dropdown-menu absolute right-0 w-48 bg-white mt-4 rounded-md shadow-lg z-50 ${isOpen ? 'open' : ''}`}>
            <Link to="profile" smooth={true} duration={500} className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md">Profile</Link>
            <Link to="projects" smooth={true} duration={500} className="block px-4 py-2 text-black hover:bg-gray-200">Projects</Link>
            <Link to="freelancingPage" smooth={true} duration={500} className="block px-4 py-2 text-black hover:bg-gray-200 rounded-md">Contact/Freelancing</Link>
          </div>
        </div>
        <button className="text-black font-bold py-2 px-4 rounded-full lets-talk-button flex items-center">
          <FaDiscord className="mr-2 text-xl .rotate-icon" /> {/* Adjusted Discord icon size */}
          <a href="https://discord.com/channels/@me/977210110990503996" target='_blank' className='blurry-button-discord flex items-center'>
            <FaDiscord className="mr-2 text-xl .rotate-icon" /> {/* Adjusted Discord icon size */}
            Let&apos;s Talk
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;