import HeroImage from './HeroImage';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0 pt-[60px]">
      <HeroImage/>
      <HeroContent/>
    </div>
  );
};

export default Hero;