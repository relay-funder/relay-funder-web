import refuniteLogo from '@/assets/logos/refunite.png';
import celoLogo from '@/assets/logos/celo.png';
import operaLogo from '@/assets/logos/opera.png';
import gitcoinLogo from '@/assets/logos/gitcoin.png';

const partners = [
  { 
    name: 'Refunite', 
    logo: refuniteLogo,
    role: 'Founding Partner - Community Leader Network',
    featured: true
  },
  { 
    name: 'Celo', 
    logo: celoLogo,
    role: 'Mobile-first blockchain infrastructure'
  },
  { 
    name: 'Opera', 
    logo: operaLogo,
    role: 'MiniPay wallet distribution'
  },
  { 
    name: 'Gitcoin', 
    logo: gitcoinLogo,
    role: 'Quadratic funding engine'
  },
  { 
    name: 'human.tech', 
    logo: null,
    role: 'RelayID identity verification'
  },
  { 
    name: 'CoalaPay', 
    logo: null,
    role: 'Payment infrastructure'
  },
  { 
    name: 'Grassroots Economics', 
    logo: null,
    role: 'Community currency systems'
  },
  { 
    name: 'Kickstarter', 
    logo: null,
    role: 'CC Protocol integration'
  },
  { 
    name: 'Filecoin Foundation', 
    logo: null,
    role: 'IPFS long-term storage'
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm text-text-muted font-medium uppercase tracking-wide mb-4 font-display">
            Building with trusted partners
          </p>
          <h2 className="text-section-title font-display text-text-primary">
            Collaborative ecosystem for displaced communities
          </h2>
        </div>
        
        {/* Featured partner */}
        <div className="mb-16">
          <div className="max-w-lg mx-auto geometric-card p-8 text-center hover-lift">
            <div className="w-20 h-20 mx-auto mb-6 clean-surface flex items-center justify-center">
              <img 
                src={refuniteLogo} 
                alt="Refunite logo" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <h3 className="font-display font-medium text-text-primary mb-3 text-xl">
              Refunite
            </h3>
            <p className="text-sm text-trust mb-4 font-display font-medium">
              Founding Partner
            </p>
            <p className="text-text-secondary leading-relaxed">
              Community Leader Network with <strong className="text-trust">100,000+ trusted leaders</strong> and <strong className="text-trust">100M+ reach</strong> across displaced communities worldwide
            </p>
          </div>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.slice(1).map((partner) => (
            <div 
              key={partner.name}
              className="text-center group hover-lift"
            >
              <div className="w-16 h-16 mx-auto mb-4 clean-surface flex items-center justify-center group-hover:border-trust transition-colors">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-trust text-lg font-bold font-display">
                    {partner.name.charAt(0)}
                  </span>
                )}
              </div>
              <h4 className="font-medium text-text-primary text-sm mb-2 font-display">
                {partner.name}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                {partner.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;