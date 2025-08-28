import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-community-new.jpg';
import heroBg from '@/assets/hero-bg-minimal.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-background to-surface-alt" />
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-text-primary leading-[1.1]">
                Community-driven crowdfunding for{' '}
                <span className="text-trust">displaced communities</span>
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
                Sponsor Match Fund
              </Link>
            </div>

            {/* Clean info badge */}
            <div className="clean-surface inline-flex items-center px-6 py-3">
              <span className="text-sm text-text-muted">
                <strong className="text-trust font-display">Launching in Africa with Refunite's Community Leader Network</strong>
              </span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="geometric-card p-8 hover-lift">
              <img
                src={heroImage}
                alt="Displaced community members collaborating with mobile technology"
                className="rounded-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4">
                <div className="geometric-card bg-growth text-white p-4">
                  <p className="text-xs mb-2 opacity-90">Community Match in action</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-6 bg-white/30 rounded-sm"></div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">→ 2.5x impact</span>
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