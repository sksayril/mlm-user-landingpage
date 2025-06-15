// React import needed for JSX
import IncomePlans from '../components/IncomePlans';

const PlansPage = () => {
  return (
    <div>
      <div className="py-10 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Income Plans</h1>
        </div>
      </div>
      <IncomePlans />
    </div>
  );
};

export default PlansPage;
