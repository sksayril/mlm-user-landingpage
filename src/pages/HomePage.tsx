// React import needed for JSX
import HeroSection from '../components/HeroSection';
import WhyJoinUs from '../components/WhyJoinUs';
import HowItWorks from '../components/HowItWorks';
import IncomePlans from '../components/IncomePlans';
import RankRewards from '../components/RankRewards';
import LiveStats from '../components/LiveStats';
import OurTeam from '../components/OurTeam';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhyJoinUs />
      <HowItWorks />
      <IncomePlans />
      <RankRewards />
      <LiveStats />
      <OurTeam />
      <Testimonials />
    </div>
  );
};

export default HomePage;
