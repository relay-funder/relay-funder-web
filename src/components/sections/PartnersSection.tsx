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
    <section className="py-16 bg-surface border-y border-border">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-text-muted font-medium uppercase tracking-wide mb-4">
            Building with trusted partners
          </p>
          <h2 className="text-2xl font-display font-semibold text-text-primary">
            Collaborative ecosystem for displaced communities
          </h2>
        </div>
        
        {/* Featured partner */}
        <div className="mb-12">
          <div className="max-w-md mx-auto bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-surface rounded-lg flex items-center justify-center">
              <img 
                src={refuniteLogo} 
                alt="Refunite logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="font-display font-semibold text-text-primary mb-2">
              Refunite
            </h3>
            <p className="text-sm text-text-muted mb-3">
              Founding Partner
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Community Leader Network with 100k+ trusted leaders and 100M+ reach across displaced communities
            </p>
          </div>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.slice(1).map((partner) => (
            <div 
              key={partner.name}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-surface border border-border rounded-lg flex items-center justify-center group-hover:border-accent transition-colors">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <div className="w-8 h-8 bg-accent/20 rounded flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="font-medium text-text-primary text-sm mb-1">
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