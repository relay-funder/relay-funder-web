import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { partners } from '@/data/partners';
import { ThemeAwareImage } from '@/hooks/useThemeLogo';
import { trackPageView, trackCTAClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

const Partners = () => {
  useEffect(() => {
    trackPageView('Partners');
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6">
            <span className="text-gradient">Partners</span> embedded in communities
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We work with organizations embedded in communities and aligned tech ecosystems to build
            dignity-preserving infrastructure for community-led funding.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="py-20 mesh-bg">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Partners Across the Ecosystem
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    <div
                      className={cn(
                        'w-32 h-16 mb-3 flex items-center justify-start',
                        partner.logoWrapperClassName
                      )}
                    >
                      <ThemeAwareImage
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className={cn('w-full h-full object-contain', partner.logoClassName)}
                      />
                    </div>
                  </a>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    <h3 className="text-xl font-semibold text-text-primary">{partner.name}</h3>
                  </a>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium mb-3">
                  {partner.role}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title text-text-primary mb-6">Become a Partner</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Are you building technology or services that could strengthen community-led funding?
              We'd love to explore collaboration.
            </p>
            <a
              href="mailto:info@relayfunder.com"
              className="btn-quantum"
              onClick={() => trackCTAClick('Get in Touch', 'Partners Page')}
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
