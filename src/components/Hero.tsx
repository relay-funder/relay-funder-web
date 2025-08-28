import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-community.jpg';
import abstractBg from '@/assets/hero-abstract.jpg';
import PartnerOrbit from './PartnerOrbit';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `url(${abstractBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/60" />
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-hero text-text-primary leading-[1.1]">
                Crowdfunding for{' '}
                <span className="text-gradient">refugee leaders</span>
              </h1>
              <p className="text-subhero text-text-secondary max-w-lg">
                Leaders propose. Supporters worldwide back them. Sponsors multiply support 
                through a shared Match Fund.
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
                <strong className="text-accent">Piloting in Africa with Refunite</strong> — Global participation welcome
              </span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Community leaders collaborating on mobile-first solutions"
                className="rounded-2xl shadow-large hover-lift"
              />
              <div className="absolute -bottom-8 -right-8 lg:-right-12">
                <div className="bg-card rounded-2xl p-6 shadow-large border border-border animate-float">
                  <p className="text-sm text-text-muted mb-2">Partner Ecosystem</p>
                  <div className="scale-75 origin-top-left">
                    <PartnerOrbit />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner ribbon */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-text-muted text-sm mb-4">In collaboration with</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-60 hover:opacity-100 interactive-base">
            {[
              'Refunite', 'Celo', 'Opera (MiniPay)', 'Gitcoin', 'human.tech (RelayID)',
              'CoalaPay', 'Grassroots Economics', 'Kickstarter CC Protocol', 'Filecoin Foundation'
            ].map((partner, index) => (
              <span
                key={partner}
                className="text-sm font-medium text-text-secondary hover:text-accent interactive-base kinetic-wobble"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;