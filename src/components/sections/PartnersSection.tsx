import { partners } from '@/data/partners';
import { ThemeAwareImage } from '@/hooks/useThemeLogo';
import { trackLinkClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const PartnersSection = () => {
  return (
    <section className="py-20 mesh-bg">
      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-mono-accent mb-4">Trusted Partners</div>
          <h2 className="text-section-title font-display text-text-primary">
            Collaborative ecosystem for refugees and displaced communities
          </h2>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 justify-items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center group hover:transform hover:scale-105 transition-transform duration-200"
              onClick={() => trackLinkClick(partner.name, partner.website, 'partner')}
            >
              <div
                className={cn(
                  'w-28 h-16 mx-auto mb-4 flex items-center justify-center transition-colors',
                  partner.logoWrapperClassName
                )}
              >
                {partner.logo ? (
                  <ThemeAwareImage
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={cn('w-full h-full object-contain', partner.logoClassName)}
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
