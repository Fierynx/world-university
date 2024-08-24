import image from '/Flag-map_of_the_world_(2017).png';

const HeroImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <img src={image} alt="World Map 2017" className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroImage;