import { Link } from 'react-router-dom';
import heroBg from '@/assets/hero-community-new.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Full-width centered content */}
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="text-mono-accent text-lg">Humanitarian Technology</div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] max-w-5xl mx-auto">
              Community-driven crowdfunding for{' '}
              <span className="text-quantum">refugees and displaced communities</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Leaders propose. Supporters worldwide back them. Sponsors multiply support 
              through a <span className="text-serif-elegant">shared Match Fund</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="btn-quantum inline-flex items-center justify-center opacity-60 cursor-not-allowed px-8 py-4 text-lg">
              Explore Projects (Coming Soon)
            </div>
            <Link to="/sponsors" className="btn-ghost inline-flex items-center justify-center px-8 py-4 text-lg">
              Sponsor Match Fund
            </Link>
          </div>

          {/* Status badge */}
          <div className="quantum-surface p-8 inline-block max-w-2xl mx-auto">
            <div className="text-mono-accent mb-3 text-sm">Project Status</div>
            <div className="text-xl font-bold text-bio">Launching in Kenya and Uganda with Refunite's Community Leader Network</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;