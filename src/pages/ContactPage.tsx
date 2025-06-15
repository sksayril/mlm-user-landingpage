// React import needed for JSX
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div>
      <div className="py-10 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h1>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
