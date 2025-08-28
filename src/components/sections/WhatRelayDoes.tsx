const WhatRelayDoes = () => {
  const reasons = [
    {
      title: 'Agency for leaders',
      description: 'Community leaders propose and lead their own projects',
    },
    {
      title: 'More impact per dollar',
      description: 'Match Fund amplifies every contribution',
    },
    {
      title: 'Straightforward transparency',
      description: 'Verifiable ledger under the hood',
      tooltip: true,
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-text-primary mb-8">
            What Relay Does
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto">
            Relay is a simple way for refugee and displaced community leaders to fund 
            the projects they know will work—backed by supporters worldwide and 
            amplified by a Sponsor-seeded Match Fund.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4 mx-auto">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-semibold text-text-primary mb-2 relative">
                  {reason.title}
                  {reason.tooltip && (
                    <span className="ml-2 text-xs text-accent cursor-help" title="Verifiable ledger under the hood">
                      ⓘ
                    </span>
                  )}
                </h3>
                <p className="text-text-muted text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatRelayDoes;