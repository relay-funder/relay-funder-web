import mobilePaymentsImage from '@/assets/mobile-payments.jpg';

const PilotsProof = () => {
  const stats = [
    { label: 'Projects launched', value: '12' },
    { label: 'Communities engaged', value: '8' },
    { label: 'Updates posted', value: '47' },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Pilots & Proof
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Callout card */}
              <div className="bg-card border-l-4 border-l-accent border border-border rounded-xl p-6">
                <h3 className="font-semibold text-text-primary mb-3">
                  Launching with Refunite's Community Leader Network
                </h3>
                <p className="text-text-muted">
                  100k+ trusted leaders • 100M+ reach across crisis-affected communities
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl font-bold text-accent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted">
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