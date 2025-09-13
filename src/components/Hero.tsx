import { Link } from 'react-router-dom';
import heroImage1 from '@/assets/hero/relay-help-refunite-group-of-people.jpg';
import heroImage2 from '@/assets/hero/6717d6c77b41816950fdfc88_volunteer-helping-homeless-people-outdoors-2023-11-27-05-18-04-utc-min.jpg';
import heroImage4 from '@/assets/hero/relay-help-refunite.jpg';
import heroImage3 from '@/assets/hero/6717da50e7b2fb4fa2a4c278_portrait-of-smiling-amhara-woman-wearing-blue-trad-2023-11-27-05-19-56-utc-min.jpg';
import heroImage5 from '@/assets/hero/relay-help-refunite-sewing.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface/30 to-background" />
      </div>

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-[85vh]">
          {/* Desktop: Two column layout, Mobile: Centered single column */}
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl">
            
            {/* Left column - Text content */}
            <div className="text-center lg:text-left space-y-10">
              <div className="space-y-6">
                <div className="text-mono-accent mb-4">Humanitarian Technology</div>
                <h1 className="text-hero leading-[0.95]">
                  Community-driven crowdfunding for{' '}
                  <span className="text-quantum">refugees and displaced communities</span>
                </h1>
                <p className="text-subhero text-text-secondary lg:max-w-xl">
                  Leaders propose. Supporters worldwide back them. Sponsors multiply support 
                  through a <span className="text-serif-elegant">shared Match Fund</span>.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 lg:justify-start justify-center">
                <div className="bg-muted text-text-primary inline-flex items-center justify-center px-6 py-3 rounded-xl border border-border cursor-not-allowed font-semibold">
                  Explore Projects (Coming Soon)
                </div>
                <Link to="/sponsors" className="btn-ghost inline-flex items-center justify-center">
                  Sponsor Match Fund
                </Link>
              </div>

              {/* Status badge */}
              <div className="quantum-surface p-6 inline-block">
                <div className="text-mono-accent mb-2">Project Status</div>
                <div className="text-display-bold text-bio">Launching in Kenya and Uganda with Refunite's Community Leader Network</div>
              </div>

              {/* Photo grid - Mobile version (below text) */}
              <div className="lg:hidden w-full max-w-lg mx-auto mt-8 pb-16">
                <div className="grid grid-cols-10 grid-rows-8 gap-3 h-[650px]">
                  {/* Photo 1 - Top left, large horizontal */}
                  <div 
                    className="col-span-6 row-span-3 flex justify-end items-end"
                  >
                    <img 
                      src={heroImage1}
                      alt="Group of people receiving help"
                      className="h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Photo 2 - Top right, medium square */}
                  <div 
                    className="col-span-4 row-span-3 rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url(${heroImage2})`,
                      backgroundSize: 'cover',
                      backgroundPosition: '65% 50%'
                    }}
                  />
                                  
                  {/* Photo 4 - Full width bottom */}
                  <div 
                    className="col-span-9 row-span-2 rounded-lg shadow-lg"
                    style={{
                      backgroundImage: `url(${heroImage4})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />

                  {/* Photo 3 - Middle left, medium square */}
                  <div 
                    className="col-span-4 row-span-3 flex justify-end items-start"
                  >
                    <img 
                      src={heroImage3}
                      alt="Portrait of smiling woman"
                      className="h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  {/* Photo 5 - Middle right, medium square */}
                  <div 
                    className="col-span-5 row-span-3 flex justify-start items-start"
                  >
                    <img 
                      src={heroImage5}
                      alt="Woman sewing"
                      className="h-auto rounded-lg shadow-lg"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Right column - Photo grid (desktop) */}
            <div className="hidden lg:block relative w-full max-w-xl mx-auto">
              <div className="grid grid-cols-10 grid-rows-8 gap-3 h-[700px]">
                {/* Photo 1 - Top left, large horizontal */}
                <div 
                  className="col-span-6 row-span-3 flex justify-end items-end"
                >
                  <img 
                    src={heroImage1}
                    alt="Group of people receiving help"
                    className="w-3/4 h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Photo 2 - Top right, medium square */}
                <div 
                  className="col-span-4 row-span-3 rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(${heroImage2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                                
                {/* Photo 4 - Full width bottom */}
                <div 
                  className="col-span-9 row-span-2 rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(${heroImage4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Photo 3 - Middle left, medium square */}
                <div 
                  className="col-span-4 row-span-3 rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(${heroImage3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Photo 5 - Middle right, medium square */}
                <div 
                  className="col-span-5 row-span-2 rounded-lg shadow-lg"
                  style={{
                    backgroundImage: `url(${heroImage5})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;