// React import needed for JSX
import FAQ from '../components/FAQ';

const FaqPage = () => {
  return (
    <div>
      <div className="py-10 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Frequently Asked Questions</h1>
        </div>
      </div>
      <FAQ />
    </div>
  );
};

export default FaqPage;
