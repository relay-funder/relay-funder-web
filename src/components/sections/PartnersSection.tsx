import { partners, foundingPartner } from '@/data/partners';
import { ThemeAwareImage } from '@/hooks/useThemeLogo';
import { trackLinkClick } from '@/lib/analytics';

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
          <a
            href={foundingPartner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-lg mx-auto web3-card p-8 text-center hover-bio group hover:transform hover:scale-105 transition-transform duration-200"
            onClick={() =>
              trackLinkClick(foundingPartner.name, foundingPartner.website, 'founding_partner')
            }
          >
            <div className="w-60 h-21 mx-auto mb-6 flex items-center justify-center">
              <ThemeAwareImage
                src={foundingPartner.logo}
                alt={`${foundingPartner.name} logo`}
                className="w-60 h-21 object-contain"
              />
            </div>
            <div className="text-mono-accent mb-4 group-hover:text-accent transition-colors">
              Founding Partner
            </div>
            <p className="text-text-secondary leading-relaxed">
              Community Leader Network with{' '}
              <strong className="text-quantum">109,000+ trusted leaders</strong> and{' '}
              <strong className="text-bio">100M+ reach</strong> across refugees and displaced
              communities worldwide
            </p>
          </a>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 relative z-10 justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group hover:transform hover:scale-105 transition-transform duration-200"
              onClick={() => trackLinkClick(partner.name, partner.website, 'partner')}
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center transition-colors">
                {partner.logo ? (
                  <ThemeAwareImage
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
              <h4 className="font-medium text-text-primary text-sm mb-2 font-display group-hover:text-accent transition-colors">
                {partner.name}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">{partner.role}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
