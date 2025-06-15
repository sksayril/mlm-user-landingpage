import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyJoinUs from './components/WhyJoinUs';
import HowItWorks from './components/HowItWorks';
import IncomePlans from './components/IncomePlans';
import RankRewards from './components/RankRewards';
import LiveStats from './components/LiveStats';
import OurTeam from './components/OurTeam';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const location = useLocation();
  
  // Handle scrolling to sections based on hash
  useEffect(() => {
    // Extract the section name from the hash
    const sectionId = location.hash.replace('#', '');
    
    if (sectionId) {
      // Find the element with matching ID
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Add a small delay to ensure elements are rendered
        setTimeout(() => {
          // Scroll to the element with smooth behavior
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // If no hash and we're on the home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
      <Header />
      <main className="pt-16 lg:pt-20"> {/* Add padding to account for fixed header */}
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <WhyJoinUs />
          <HowItWorks />
        </section>
        
        <section id="plans">
          <IncomePlans />
        </section>
        
        <section id="rewards">
          <RankRewards />
          <LiveStats />
        </section>
        
        <section id="team">
          <OurTeam />
          <Testimonials />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;