import Layout from '@/components/Layout';

const Partners = () => {
  const foundingPartner = {
    name: 'Refunite',
    description: 'Our founding partner brings the Community Leader Network—100k+ trusted leaders with 100M+ reach across crisis-affected communities worldwide.',
    role: 'Community Leader Network & Distribution',
    website: 'https://refunite.org',
  };

  const partners = [
    { name: 'Celo', role: 'Mobile-first blockchain rails', website: 'https://celo.org' },
    { name: 'Opera (MiniPay)', role: 'Distribution via Opera & MiniPay', website: 'https://minipay.opera.com' },
    { name: 'Gitcoin', role: 'Quadratic funding engine', website: 'https://gitcoin.co' },
    { name: 'human.tech (RelayID)', role: 'Privacy-preserving identity verification', website: 'https://human.tech' },
    { name: 'CoalaPay', role: 'Payment infrastructure & mobile money rails', website: 'https://coalapay.com' },
    { name: 'Grassroots Economics', role: 'Community currency systems', website: 'https://grassrootseconomics.org' },
    { name: 'Kickstarter CC Protocol', role: 'Open crowdfunding infrastructure', website: 'https://kickstarter.com' },
    { name: 'Filecoin Foundation', role: 'IPFS long-term storage & preservation', website: 'https://fil.org' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6">
            <span className="text-gradient">Partners</span> embedded in communities
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We work with organizations embedded in communities and aligned tech ecosystems 
            to build dignity-preserving infrastructure for community-led funding.
          </p>
        </div>
      </section>

      {/* Founding Partner */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Founding Partner
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 hover-lift">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-accent mb-4">
                    {foundingPartner.name}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-6">
                    {foundingPartner.description}
                  </p>
                  <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {foundingPartner.role}
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <a
                    href={foundingPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Technology & Infrastructure Partners
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {partner.name}
                </h3>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {partner.role}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark text-sm font-medium interactive-base"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title text-text-primary mb-6">
              Become a Partner
            </h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Are you building technology or services that could strengthen 
              community-led funding? We'd love to explore collaboration.
            </p>
            <a
              href="mailto:partners@relay.community"
              className="btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;