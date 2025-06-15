// React import needed for JSX
import RankRewards from '../components/RankRewards';

const RewardsPage = () => {
  return (
    <div>
      <div className="py-10 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Rank Rewards</h1>
        </div>
      </div>
      <RankRewards />
    </div>
  );
};

export default RewardsPage;
