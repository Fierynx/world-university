import BackgroundImage from '/Flag-map_of_the_world_(2017).png';

const BackgroundImageComponent = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <img src={BackgroundImage} alt="World Map 2017" className="w-full h-full object-cover" />
    </div>
  );
};

export default BackgroundImageComponent;