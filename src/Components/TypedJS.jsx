import React from 'react';
import Typed from 'typed.js';
import  Javascript  from '../assets/javascript.png';
import Mongoodb from '../assets/mongodb.svg';
import Jva from '../assets/java.svg';
import py from '../assets/python.svg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import react from '../assets/react.svg';
import node from '../assets/node.svg';

function TypedJS() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
      `<span style='display: flex; align-items: center;'><img src=${Javascript} alt="JavaScript" style="width: 20px; height: 20px; margin-right: 5px;" /> JavaScript</span>`,
      `<span style='display: flex; align-items: center;'><img src=${py} alt="Python" style="width: 20px; height: 20px; margin-right: 5px;" /> Python</span>`,
      `<span style='display: flex; align-items: center;'><img src=${Jva} alt="Java" style="width: 20px; height: 20px; margin-right: 5px;" /> Java</span>`,
      `<span style='display: flex; align-items: center;'><img src=${css} alt="CSS" style="width: 20px; height: 20px; margin-right: 5px;" /> CSS</span>`,
      `<span style='display: flex; align-items: center;'><img src=${html} alt="HTML" style="width: 20px; height: 20px; margin-right: 5px;" /> HTML</span>`,
      `<span style='display: flex; align-items: center;'><img src=${Mongoodb} alt="MongoDB" style="width: 20px; height: 20px; margin-right: 5px;" /> MongoDB</span>`,
      `<span style='display: flex; align-items: center;'><img src=${react} alt="React" style="width: 20px; height: 20px; margin-right: 5px;" /> React</span>`,
      `<span style='display: flex; align-items: center;'><img src=${node} alt="Node.js" style="width: 20px; height: 20px; margin-right: 5px;" /> Node.js</span>`
      ],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App flex pl-1 text-lg text-white flex-row w-full">
      <span ref={el} className='w-fit' />
    </div>
  );
}

export default TypedJS;