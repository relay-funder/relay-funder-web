import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-community-new.jpg';
import heroBg from '@/assets/hero-bg-minimal.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-transparent to-background/70" />
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-hero text-text-primary leading-[1.1]">
                Community-driven crowdfunding for{' '}
                <span className="text-gradient">displaced communities</span>
              </h1>
              <p className="text-subhero text-text-secondary max-w-lg">
                Leaders propose. Supporters worldwide back them. Sponsors multiply support 
                through a <span className="text-accent-serif">shared Match Fund</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.relay.community"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Explore Projects
              </a>
              <Link to="/sponsors" className="btn-secondary inline-flex items-center justify-center">
                Sponsor the Match Fund
              </Link>
            </div>

            {/* Pilot badge */}
            <div className="inline-flex items-center px-4 py-2 bg-surface border border-border rounded-full">
              <span className="text-sm text-text-muted">
                <strong className="text-accent">Launching in Africa with Refunite's Community Leader Network</strong>
              </span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Displaced community members collaborating with mobile technology"
                className="rounded-2xl shadow-large hover-lift"
              />
              <div className="absolute -bottom-6 -right-6 lg:-right-8">
                <div className="bg-card rounded-xl p-4 shadow-large border border-border animate-float">
                  <p className="text-xs text-text-muted mb-2">Community Match in action</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-6 bg-accent/30 rounded"></div>
                      ))}
                    </div>
                    <span className="text-xs text-accent font-medium">→ 2.5x impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;