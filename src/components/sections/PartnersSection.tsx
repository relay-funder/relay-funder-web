import refuniteLogo from '@/assets/logos/logo-refunite.png';
import celoLogo from '@/assets/logos/logo-celo.png';
import operaLogo from '@/assets/logos/logo-opera-mini.png';
import gitcoinLogo from '@/assets/logos/logo-gitcoin.png';
import humanTechLogo from '@/assets/logos/logo-human-tech.png';
import grassrootsEconomicsLogo from '@/assets/logos/logo-grassroots-economics.png';
import ccProtocolLogo from '@/assets/logos/logo-cc-protocol.jpeg';
import filecoinFoundationLogo from '@/assets/logos/logo-filecoin-foundation.png';

const partners = [
  { 
    name: 'CC Protocol', 
    logo: ccProtocolLogo,
    role: 'Kickstarted supported crowdfunding infrastructure'
  },
  { 
    name: 'Celo', 
    logo: celoLogo,
    role: 'Blockchain infrastructure'
  },
  { 
    name: 'human.tech', 
    logo: humanTechLogo,
    role: 'Zero-knowledge identity verification'
  },
  { 
    name: 'Grassroots Economics', 
    logo: grassrootsEconomicsLogo,
    role: 'Community currency systems'
  },
  { 
    name: 'Opera Mini', 
    logo: operaLogo,
    role: 'MiniPay wallet distribution'
  },
  { 
    name: 'Filecoin Foundation', 
    logo: filecoinFoundationLogo,
    role: 'IPFS long-term storage'
  },
  { 
    name: 'Gitcoin', 
    logo: gitcoinLogo,
    role: 'Quadratic funding and matching'
  },
];

const PartnersSection = () => {
  return (
    <section className="py-20 mesh-bg">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="text-mono-accent mb-4">Trusted Partners</div>
          <h2 className="text-section-title font-display text-text-primary">
            Collaborative ecosystem for refugees and displaced communities
          </h2>
        </div>
        
        {/* Featured partner */}
        <div className="mb-16 relative z-10">
          <div className="max-w-lg mx-auto web3-card p-8 text-center hover-bio">
            <div className="w-50 h-30 mx-auto mb-6 flex items-center justify-center">
              <img 
                src={refuniteLogo} 
                alt="Refunite logo" 
                className="w-50 h-30 object-contain"
              />
            </div>
            <div className="text-mono-accent mb-4">
              Founding Partner
            </div>
            <p className="text-text-secondary leading-relaxed">
              Community Leader Network with <strong className="text-quantum">100,000+ trusted leaders</strong> and <strong className="text-bio">100M+ reach</strong> across refugees and displaced communities worldwide
            </p>
          </div>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 relative z-10 justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-colors">
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`} 
                    className="w-16 h-16 object-contain rounded-full"
                  />
                ) : (
                  <span className="text-quantum text-xl font-bold font-display">
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