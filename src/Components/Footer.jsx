import '../App.css';

const Footer = () => {
  return (
    
<>
<footer className="bg-white shadow  mybgcolor">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://github.com/adityarwt1"  target='_blank' className="hover:underline">ADITYA</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#profille" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="#home" className="hover:underline me-4 md:me-6">Licensing</a>
      </li>
      <li>
        <a href="#contact" className="hover:underline">Contact</a>
      </li>
    </ul>
  </div>
</footer>

</>

  )
}

export default Footer