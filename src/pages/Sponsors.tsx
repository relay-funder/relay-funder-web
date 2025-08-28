import { useState } from 'react';
import Layout from '@/components/Layout';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Sponsors = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  const themes = [
    {
      title: 'Education',
      description: 'Supporting learning initiatives and skill development programs',
      examples: ['Digital literacy workshops', 'Vocational training centers', 'Language learning programs'],
    },
    {
      title: 'Micro-enterprise',
      description: 'Empowering small business development and economic opportunities',
      examples: ['Market access platforms', 'Equipment and tools', 'Business mentorship programs'],
    },
    {
      title: 'Climate resilience',
      description: 'Building adaptive capacity for environmental challenges',
      examples: ['Water conservation systems', 'Sustainable agriculture', 'Renewable energy solutions'],
    },
  ];

  const benefits = [
    {
      title: 'Clear attribution',
      description: 'Your support is prominently recognized in project communications and updates.',
    },
    {
      title: 'Transparent allocations',
      description: 'See exactly how your Match Fund contributions amplify community support.',
    },
    {
      title: 'Verified updates',
      description: 'Receive regular progress reports with verifiable impact metrics.',
    },
    {
      title: 'Spotlight opportunities',
      description: 'Feature in success stories and community celebration events.',
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6">
            Fuel the Match Fund. <span className="text-gradient">Multiply community power.</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Partner with Relay to amplify the impact of community-driven projects. 
            Your sponsorship creates a multiplier effect that transforms individual 
            contributions into substantial funding for refugee-led initiatives.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Sponsor Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes Carousel */}
      <section className="py-20 bg-surface">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-section-title text-text-primary mb-12 text-center">
            Funding Themes
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => setCurrentTheme((prev) => (prev - 1 + themes.length) % themes.length)}
                  className="p-2 rounded-lg border border-border hover:bg-surface interactive-base"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex space-x-2">
                  {themes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTheme ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTheme((prev) => (prev + 1) % themes.length)}
                  className="p-2 rounded-lg border border-border hover:bg-surface interactive-base"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-accent mb-4">
                  {themes[currentTheme].title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {themes[currentTheme].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {themes[currentTheme].examples.map((example, index) => (
                    <div
                      key={example}
                      className="bg-surface rounded-lg p-4 text-text-muted text-sm"
                    >
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title text-text-primary mb-6">
              Ready to multiply impact?
            </h2>
            <p className="text-text-secondary mb-8">
              Join our growing network of sponsors who believe in community-led solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:sponsors@relay.community"
                className="btn-primary"
              >
                Talk to Us
              </a>
              <a
                href="mailto:sponsors@relay.community?subject=Starter Kit Request"
                className="btn-secondary"
              >
                Request Starter Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;