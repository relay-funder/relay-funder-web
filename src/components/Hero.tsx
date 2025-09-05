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

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">
          {/* Left: Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="text-mono-accent mb-4">Humanitarian Technology</div>
              <h1 className="text-hero leading-[0.95]">
                Community-driven crowdfunding for{' '}
                <span className="text-quantum">refugees and displaced communities</span>
              </h1>
              <p className="text-subhero text-text-secondary max-w-lg">
                Leaders propose. Supporters worldwide back them. Sponsors multiply support 
                through a <span className="text-serif-elegant">shared Match Fund</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://app.relayfunder.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quantum inline-flex items-center justify-center"
              >
                Explore Projects
              </a>
              <Link to="/sponsors" className="btn-ghost inline-flex items-center justify-center">
                Sponsor Match Fund
              </Link>
            </div>

            {/* Status badge */}
            <div className="quantum-surface p-6 inline-block">
              <div className="text-mono-accent mb-2">Project Status</div>
              <div className="text-display-bold text-bio">Launching in Kenya and Uganda with Refunite's Community Leader Network</div>
            </div>
          </div>

          {/* Right: Visual Grid */}
          <div className="relative">
            <div className="web3-card p-2">
              <div className="grid grid-cols-2 gap-2 rounded-xl overflow-hidden">
                <img
                  src={heroImage1}
                  alt="Photojournalist documenting refugee stories"
                  className="w-full h-48 object-cover"
                />
                <img
                  src={heroImage2}
                  alt="Volunteer helping displaced community members"
                  className="w-full h-48 object-cover"
                />
                <img
                  src={heroImage3}
                  alt="Community leader sharing local stories"
                  className="w-full h-48 object-cover"
                />
                <img
                  src={heroImage4}
                  alt="Amhara woman in traditional blue clothing"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="bio-surface p-4 text-background bg-bio">
                  <div className="text-xs text-background/80 mb-2 font-medium">Community Match Active</div>
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-6 bg-background/40 rounded-sm"></div>
                      ))}
                    </div>
                    <div className="font-mono font-bold text-background">2.5x Impact</div>
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