import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';
const SponsorsPreview = () => {
  const benefits = ['Clear attribution', 'Transparent allocations', 'Verified updates', 'Spotlight opportunities'];
  return <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-mono-accent mb-4">Partnership Opportunities</div>
          <h2 className="text-section-title text-text-primary mb-6 font-display">
            Match Fund Sponsors
          </h2>
          
          <p className="text-subhero text-text-secondary leading-relaxed mb-12">
            Fuel the Match Fund. <span className="text-serif-elegant">Multiply community power.</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => <div key={benefit} className="web3-card p-6 border-l-4 border-l-quantum hover-quantum">
                <p className="font-medium text-text-primary font-display">
                  {benefit}
                </p>
              </div>)}
          </div>

          <div className="flex justify-center">
            <a 
              href="mailto:sponsor@relayfunder.com" 
              className="btn-quantum"
              onClick={() => trackCTAClick('Get In Touch', 'Sponsors Preview')}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default SponsorsPreview;