const WhatRelayDoes = () => {
  const reasons = [
    {
      title: 'Leadership Driven',
      description:
        'Local leaders know what works best in their own communities. Relay Funder equips them with the tools to launch and fund the initiatives that matter most.',
    },
    {
      title: 'Amplified Impact',
      description:
        'Every contribution is multiplied through our sponsor-seeded matching pool, turning individual support into collective momentum.',
    },
    {
      title: 'Radical Transparency',
      description:
        'A verifiable ledger tracks funds from donor to campaign, showing clearly how resources are used and what impact they create.',
    },
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-mono-accent mb-4">Our Mission</div>
          <h2 className="text-section-title text-text-primary mb-8">What Relay Funder Does</h2>

          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-3xl mx-auto">
            Relay Funder is a simple way for refugee and displaced community leaders to fund the
            campaigns they know will work—backed by supporters worldwide and amplified by a
            Sponsor-seeded Match Fund.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-semibold text-text-primary mb-2 border-l-3 border-accent pl-4 relative">
                  {reason.title}
                </h3>
                <p className="text-text-muted text-sm pl-4">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatRelayDoes;
