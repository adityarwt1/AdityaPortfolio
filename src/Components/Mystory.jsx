import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MyStory = () => {
  const [text, setText] = useState('');
  const fullText = "Hello! My name is Aditya Rawat. I was born on August 24, 2007, in Madhya Pradesh, India. From a young age, I have been passionate about software engineering. Over the years, I have honed my skills in various programming languages and technologies. My journey in the world of software development has been both challenging and rewarding. I am constantly learning and evolving, striving to become a better developer every day. My goal is to create innovative solutions that can make a positive impact on the world. Thank you for taking the time to read my story.";
  const sectionRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const typeText = () => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(interval);
        }
      }, 50); // Adjust the speed of the typing effect here
    };

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 80%',
      onEnter: typeText,
    });

    return () => {
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [fullText]);

  return (
    <section ref={sectionRef} className="bg-black text-white p-6 overflow-hidden h-screen">
      <h2 className="text-2xl font-bold mb-4">My Story</h2>
      <p className="mb-4">{text}</p>
      <h3 className="text-xl font-semibold mb-2">Skills</h3>
      <ul className="list-disc list-inside">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Python</li>
      </ul>
    </section>
  );
};

export default MyStory;