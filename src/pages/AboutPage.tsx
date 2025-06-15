// React import needed for JSX
import WhyJoinUs from '../components/WhyJoinUs';
import HowItWorks from '../components/HowItWorks';
import OurTeam from '../components/OurTeam';

const AboutPage = () => {
  return (
    <div>
      <div className="py-10 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">About Us</h1>
        </div>
      </div>
      <WhyJoinUs />
      <HowItWorks />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
