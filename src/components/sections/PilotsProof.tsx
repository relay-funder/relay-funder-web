import mobilePaymentsImage from '@/assets/mobile-payments.jpg';

const PilotsProof = () => {
  const networkStats = [
    { label: 'Trusted leaders', value: '109,000+', accent: 'text-quantum' },
    { label: 'Community reach', value: '100M+', accent: 'text-bio' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-mono-accent mb-4">Network Overview</div>
            <h2 className="text-section-title text-text-primary font-display">
              Trusted Network
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Callout card */}
              <div className="web3-card p-8 border-l-4 border-l-bio hover-bio">
                <div className="text-mono-accent mb-3">Launch Partner</div>
                <h3 className="font-medium text-text-primary mb-4 font-display text-lg">
                  Launching with Refunite's Community Leader Network
                </h3>
                <p className="text-text-muted leading-relaxed">
                  A proven platform connecting displaced families across crisis-affected regions, powered by trusted community leaders who understand local needs and cultural contexts.
                </p>
              </div>

              {/* Network Stats */}
              <div className="grid grid-cols-2 gap-8">
                {networkStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center"
                  >
                    <div className={`text-3xl font-medium mb-2 font-mono ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted font-display">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="web3-card overflow-hidden hover-quantum">
                <img
                  src={mobilePaymentsImage}
                  alt="Mobile-first financial technology enabling community-led projects"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotsProof;