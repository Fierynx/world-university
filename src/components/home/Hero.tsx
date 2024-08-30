import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0">
      <HeroImage/>
      <HeroContent/>
    </div>
  );
};

export default Hero;