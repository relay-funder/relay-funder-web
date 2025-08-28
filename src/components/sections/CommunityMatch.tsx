import { useState } from 'react';

const CommunityMatch = () => {
  const [backerCount, setBackerCount] = useState(5);
  
  // Quadratic funding calculation: sqrt(sum of sqrt(individual contributions))
  const calculateMatch = (backers: number) => {
    return Math.floor(Math.sqrt(backers) * 1.5);
  };

  const matchMultiplier = calculateMatch(backerCount);
  const totalImpact = backerCount + matchMultiplier;

  return (
    <section className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-text-primary mb-6">
            <span className="text-display-quirky">Community Match</span>
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-12 text-body-serif">
            More diverse community support creates exponentially larger matches from the Sponsor-seeded Match Fund.
          </p>

          {/* Interactive calculator */}
          <div className="bg-card border border-border rounded-2xl p-8 max-w-xl mx-auto">
            <div className="space-y-8">
              {/* Backer count slider */}
              <div>
                <label className="block text-sm text-text-muted mb-4 text-display-quirky">
                  Number of community backers
                </label>
                <input
                  type="range"
                  min="1"
                  max="25"
                  value={backerCount}
                  onChange={(e) => setBackerCount(Number(e.target.value))}
                  className="w-full h-2 bg-surface rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                  <span>1</span>
                  <span className="font-medium text-accent">{backerCount} backers</span>
                  <span>25</span>
                </div>
              </div>

              {/* Visual breakdown */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <span className="text-sm text-text-secondary">Individual contributions</span>
                  <span className="font-medium text-text-primary">${backerCount * 10}</span>
                </div>
                
                <div className="flex items-center justify-center py-2">
                  <span className="text-accent font-medium">+ Community Match</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                  <span className="text-sm text-text-secondary">Match Fund contribution</span>
                  <span className="font-medium text-accent">${matchMultiplier * 10}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-text-primary">Total for project</span>
                    <span className="text-2xl font-bold text-accent">${totalImpact * 10}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-text-muted mt-6 max-w-lg mx-auto">
            The Community Match rewards broad community support over large individual donations, 
            ensuring projects with genuine grassroots backing receive the most funding.
            <span className="block mt-1 text-xs opacity-75">Powered by quadratic funding algorithms</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityMatch;