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
    <section className="py-20 mesh-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="text-mono-accent mb-4">Trusted Partners</div>
          <h2 className="text-section-title font-display text-text-primary">
            Collaborative ecosystem for displaced communities
          </h2>
        </div>
        
        {/* Featured partner */}
        <div className="mb-16 relative z-10">
          <div className="max-w-lg mx-auto web3-card p-8 text-center hover-bio">
            <div className="w-20 h-20 mx-auto mb-6 quantum-surface flex items-center justify-center">
              <img 
                src={refuniteLogo} 
                alt="Refunite logo" 
                className="w-14 h-14 object-contain"
              />
            </div>
            <h3 className="font-display font-medium text-text-primary mb-3 text-xl">
              Refunite
            </h3>
            <div className="text-mono-accent mb-4">
              Founding Partner
            </div>
            <p className="text-text-secondary leading-relaxed">
              Community Leader Network with <strong className="text-quantum">100,000+ trusted leaders</strong> and <strong className="text-bio">100M+ reach</strong> across displaced communities worldwide
            </p>
          </div>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {partners.slice(1).map((partner) => (
            <div 
              key={partner.name}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 quantum-surface flex items-center justify-center group-hover:border-quantum hover-quantum transition-colors">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-quantum text-lg font-bold font-display">
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