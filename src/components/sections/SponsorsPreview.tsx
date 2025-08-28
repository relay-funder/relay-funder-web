import { Link } from 'react-router-dom';

const SponsorsPreview = () => {
  const benefits = [
    'Clear attribution',
    'Transparent allocations', 
    'Verified updates',
    'Spotlight opportunities',
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-title text-text-primary mb-6">
            Sponsors
          </h2>
          
          <p className="text-xl text-text-secondary leading-relaxed mb-12">
            Fuel the Match Fund. Multiply community power.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg mb-4 mx-auto flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
                <p className="font-medium text-text-primary text-sm">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sponsors@relay.community"
              className="btn-primary"
            >
              Talk to Us
            </a>
            <Link to="/sponsors" className="btn-secondary">
              Request Starter Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsPreview;