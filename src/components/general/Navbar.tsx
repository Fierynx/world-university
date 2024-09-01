import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-md fixed left-0 right-0 top-0 z-50">
      <div className="container py-5 flex justify-between items-center px-4 md:px-8">
        <div className="text-2xl font-bold text-white">WorldUniversity.</div>
        <div className="hidden md:flex gap-10">
          <Link to="/" className="text-white hover:text-accent transition duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-accent transition duration-300">About</Link>
          <Link to="/country-filter-search" className="text-white hover:text-accent transition duration-300">Explore Countries</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden bg-primary transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <Link to="/" className="block px-4 py-2 text-white hover:text-accent transition duration-300">Home</Link>
        <Link to="/country-search" className="block px-4 py-2 text-white hover:text-accent transition duration-300">Country Search</Link>
        <Link to="/country-filter" className="block px-4 py-2 text-white hover:text-accent transition duration-300">Country Filter</Link>
        <Link to="/about" className="block px-4 py-2 text-white hover:text-accent transition duration-300">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;