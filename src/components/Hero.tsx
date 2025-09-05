import { Link } from 'react-router-dom';
import heroCommunityBg from '@/assets/hero-community-new.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Community background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroCommunityBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12 py-20">
          {/* Header */}
          <div className="space-y-8 max-w-4xl">
            <div className="text-mono-accent">Humanitarian Technology</div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              Community-driven crowdfunding for{' '}
              <span className="text-quantum">refugees and displaced communities</span>
            </h1>
            <p className="text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Leaders propose. Supporters worldwide back them. Sponsors multiply support 
              through a <span className="text-serif-elegant font-medium">shared Match Fund</span>.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="btn-quantum inline-flex items-center justify-center opacity-60 cursor-not-allowed">
              Explore Projects (Coming Soon)
            </div>
            <Link to="/sponsors" className="btn-ghost inline-flex items-center justify-center">
              Sponsor Match Fund
            </Link>
          </div>

          {/* Status badge */}
          <div className="quantum-surface p-8 max-w-2xl">
            <div className="text-mono-accent mb-3">Project Status</div>
            <div className="text-lg lg:text-xl text-bio font-medium">
              Launching in Kenya and Uganda with Refunite's Community Leader Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;