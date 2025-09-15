import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { trackPageView, trackCTAClick } from '@/lib/analytics';

const Sponsors = () => {
  useEffect(() => {
    trackPageView('Sponsors');
  }, []);

  const themes = [
    {
      title: 'Education',
      description: 'Learning initiatives and skill development',
      color: 'bg-trust',
    },
    {
      title: 'Economic Development',
      description: 'Small business and livelihood opportunities',
      color: 'bg-growth',
    },
    {
      title: 'Climate Resilience',
      description: 'Environmental adaptation and sustainability',
      color: 'bg-hope',
    },
    {
      title: 'General Aid',
      description: 'Essential services and emergency support',
      color: 'bg-surface',
    },
  ];

  const benefits = [
    {
      title: 'Clear attribution',
      description: 'Your support is prominently recognized in project communications and updates.',
    },
    {
      title: 'Transparent allocations',
      description: 'See exactly how your Match Fund contributions amplify community support.',
    },
    {
      title: 'Verified updates',
      description: 'Receive regular progress reports with verifiable impact metrics.',
    },
    {
      title: 'Spotlight opportunities',
      description: 'Feature in success stories and community celebration events.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6 pb-2">
            Fuel the Match Fund. <span className="text-gradient">Multiply community power.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Partner with Relay Funder to amplify the impact of community-driven projects. Your
            sponsorship creates a multiplier effect that transforms individual contributions into
            substantial funding for refugee-led initiatives.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Match Fund Sponsor Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">{benefit.title}</h3>
                <p className="text-text-muted leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Themes */}
      <section className="py-20 mesh-bg">
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-section-title text-text-primary mb-6 font-display">
              Funding Themes
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto font-serif">
              Support community-led projects across key areas of impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <div
                key={theme.title}
                className="bg-card border border-border rounded-xl p-8 hover-lift animate-fade-in-up aspect-square flex flex-col justify-center items-center text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4 font-display">
                  {theme.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title text-text-primary mb-6">Ready to multiply impact?</h2>
            <p className="text-text-secondary mb-8">
              Join our growing network of sponsors who believe in community-led solutions.
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:info@relayfunder.com"
                className="btn-quantum"
                onClick={() => trackCTAClick('Talk to Us', 'Sponsors Page')}
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
