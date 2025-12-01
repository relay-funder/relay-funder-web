const WhyNow = () => {
  const stats = [
    {
      number: '120M',
      title: 'people forcibly displaced today',
      description:
        'With numbers projected to reach 500M people by 2030, the legacy humanitarian system is not built for the future.',
    },
    {
      number: '42%',
      title: 'aid funding cuts',
      description:
        'Global humanitarian funding has fallen sharply in the past year, just as needs are rising to record levels.',
    },
    {
      number: '~80%',
      title: 'inefficiencies',
      description:
        'Loss to intermediaries, large overhead for program management, international bank wire fees, foreign exchange fees, and corruption.',
    },
  ];

  return (
    <section className="py-20 mesh-bg">
      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-section-title text-text-primary mb-6 font-display">Why Now</h2>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We're living through a convergence of crises: conflicts are intensifying, climate
              disasters are accelerating, and the traditional aid system is collapsing.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mt-6">
              At the same time, new infrastructure has emerged —{' '}
              <span className="font-semibold text-text-primary">
                secure digital identity, mobile-based savings, and verifiable public ledgers
              </span>{' '}
              — making it possible to rebuild aid on principles of{' '}
              <span className="font-semibold text-text-primary">
                dignity, transparency, and local agency
              </span>
              .
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div
                key={stat.number}
                className="bg-card border border-border rounded-xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-quantum mb-3 font-mono">{stat.number}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">{stat.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              We need tech forward agile systems that shift power into the hands of those that need
              it most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;

