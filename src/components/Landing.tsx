import { Link } from 'react-router-dom';
import BackgroundImage from '/Flag-map_of_the_world_(2017).png';

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0" style={{ paddingTop: '60px' }}>
      <div className="absolute top-0 left-0 w-full h-screen">
        <img src={BackgroundImage} alt="World Map 2017" className="w-full h-full object-cover" />
      </div>
      <div className="absolute pt-20 inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-60 p-4 gap-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to WorldUniversity</h1>
        <p className="text-xs md:text-sm lg:text-lg mb-8 max-w-4xl mx-auto">
          Discover detailed information about countries around the world. Explore popular countries, search for specific nations, and filter based on various criteria. WorldUniversity provides an easy and informative experience for all users.
        </p>
        <Link to={"/country-detail"} className="bg-gradient-to-r mt-1 from-accent to-yellow-500 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-yellow-600 hover:to-yellow-700 transition duration-300 active:opacity-30">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;