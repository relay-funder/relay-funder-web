import mobilePaymentsImage from '@/assets/mobile-payments.jpg';

const PilotsProof = () => {
  const networkStats = [
    { label: 'Trusted leaders', value: '100,000+', accent: 'text-accent' },
    { label: 'Community reach', value: '100M+', accent: 'text-secondary' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            <span className="text-display-quirky">Trusted Network</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
              <div className="space-y-8">
              {/* Callout card */}
              <div className="bg-card border-l-4 border-l-accent border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text-primary mb-3 text-display-quirky">
                  Launching with Refunite's Community Leader Network
                </h3>
                <p className="text-text-muted text-body-serif">
                  A proven platform connecting displaced families across crisis-affected regions, powered by trusted community leaders who understand local needs and cultural contexts.
                </p>
              </div>

              {/* Network Stats */}
              <div className="grid grid-cols-2 gap-8">
                {networkStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`text-2xl font-bold mb-1 font-display ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted text-body-serif">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <img
                src={mobilePaymentsImage}
                alt="Mobile-first financial technology enabling community-led projects"
                className="rounded-2xl shadow-large hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotsProof;