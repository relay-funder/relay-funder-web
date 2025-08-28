import { useState, useEffect } from 'react';

const CommunityMatch = () => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-text-primary mb-8">
            Community Match
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            More individual backers → stronger match from Sponsors → bigger total for the project.
          </p>

          {/* Visual diagram */}
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Individual Contributions */}
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Individual backers</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-8 rounded transition-all duration-500 ${
                        animationStep >= 1 && i < 3
                          ? 'bg-accent'
                          : animationStep >= 2 && i < 4
                          ? 'bg-accent'
                          : animationStep >= 3 && i < 5
                          ? 'bg-accent'
                          : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Match Multiplier */}
              <div className="flex items-center justify-center">
                <div className={`text-accent font-bold transition-all duration-500 ${
                  animationStep >= 2 ? 'scale-110' : 'scale-100'
                }`}>
                  × Match Fund
                </div>
              </div>

              {/* Total Impact */}
              <div className="flex items-center justify-between">
                <span className="text-text-muted text-sm">Total for project</span>
                <div className="flex space-x-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-12 rounded transition-all duration-700 ${
                        animationStep >= 3 ? 'bg-gradient-to-t from-accent to-accent-light' : 'bg-border'
                      }`}
                      style={{ animationDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMatch;