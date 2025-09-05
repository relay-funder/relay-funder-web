import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero/6717d6c767768ed6c1db79bc_photojournalist-in-bulletproof-vest-holding-his-ca-2023-11-27-05-02-01-utc-min.jpg';
import heroImage2 from '@/assets/hero/6717d6c77b41816950fdfc88_volunteer-helping-homeless-people-outdoors-2023-11-27-05-18-04-utc-min.jpg';
import heroImage3 from '@/assets/hero/6717d6c7e16fdfb6e86b2cf4_woman-looking-at-camera-while-holding-a-mate-with-2023-11-27-05-23-17-utc-min.jpg';
import heroImage4 from '@/assets/hero/6717da50e7b2fb4fa2a4c278_portrait-of-smiling-amhara-woman-wearing-blue-trad-2023-11-27-05-19-56-utc-min.jpg';
import webHeroBg from '@/assets/hero-web3-abstract.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg">
      {/* Web3 background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${webHeroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/50 to-background" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center space-y-12">
          {/* Content */}
          <div className="space-y-8 max-w-4xl">
            <div className="space-y-6">
              <div className="text-mono-accent text-lg">Humanitarian Technology</div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display leading-[0.9] tracking-tight">
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
              <div className="btn-quantum inline-flex items-center justify-center opacity-60 cursor-not-allowed text-lg px-8 py-4">
                Explore Projects (Coming Soon)
              </div>
              <Link to="/sponsors" className="btn-ghost inline-flex items-center justify-center text-lg px-8 py-4">
                Sponsor Match Fund
              </Link>
            </div>

            {/* Status badge */}
            <div className="quantum-surface p-8 inline-block max-w-2xl mx-auto">
              <div className="text-mono-accent mb-3 text-sm">Project Status</div>
              <div className="text-xl font-bold text-bio">Launching in Kenya and Uganda with Refunite's Community Leader Network</div>
            </div>
          </div>

          {/* Community Impact Badge */}
          <div className="bio-surface p-6 rounded-xl shadow-lg">
            <div className="text-sm text-text-secondary mb-2 font-medium">Community Match Active</div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-3 h-8 bg-bio/40 rounded-sm"></div>
                ))}
              </div>
              <div className="font-mono font-bold text-bio text-lg">2.5x Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;