import { Link } from 'react-router-dom';

const HeroContent = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60 pb-10 gap-3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to WorldUniversity</h1>
      <p className="text-xs md:text-sm lg:text-lg mb-8 max-w-4xl mx-auto">
        Discover detailed information about countries around the world. Explore popular countries, search for specific nations, and filter based on various criteria. WorldUniversity provides an easy and informative experience for all users.
      </p>
      <Link to="/country-search" className="bg-gradient-to-r mt-1 from-accent to-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition duration-300 active:opacity-30">
        Get Started
      </Link>
    </div>
  );
};

export default HeroContent;