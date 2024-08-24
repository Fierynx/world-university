import BackgroundImageComponent from './BackgroundImage';
import MainContent from './MainContent';

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden m-0 p-0" style={{ paddingTop: '60px' }}>
      <BackgroundImageComponent/>
      <MainContent/>
    </div>
  );
};

export default Landing;