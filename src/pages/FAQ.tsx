import Layout from '@/components/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Relay Funder ensure the safety of funds?',
      answer: 'Relay Funder uses secure, audited digital infrastructure with privacy-preserving identity verification. Contributions are processed through trusted payment rails, converted into stablecoins (digital currencies tied to stable values like the US dollar), and sent directly to community treasuries.',
    },
    {
      question: 'Where do the funds actually go?',
      answer: 'Funds go directly to vetted community treasuries in the regions where our partners on the ground operate.',
    },
    {
      question: 'Which regions does Relay Funder currently serve?',
      answer: 'We currently serve refugee and displaced communities in Kenya and Uganda, with plans to expand across East Africa and other high-need regions in partnership with humanitarian organizations.',
    },
    {
      question: 'Who are Match Fund Sponsors and how do they work?',
      answer: 'Match Fund Sponsors are individuals, foundations, NGOs, and philanthropies who contribute to the Match Fund, which amplifies individual contributions. The more community backers a project has, the larger the match it receives from the Sponsor pool.',
    },
    {
      question: 'How can campaigns apply to participate in match funds?',
      answer: 'Campaign participation in match funds requires admin approval and depends on the specific topic and round sponsor requirements. Not every campaign is automatically eligible for every match fund - each round has its own focus areas and criteria set by the sponsoring organization. Interested organizations can contact our partnerships team to explore participation and review requirements.',
    },
    {
      question: 'When and how are match funds distributed to campaigns?',
      answer: 'At the end of each campaign round, match funds are allocated based on transparent rules—for example, proportional to the number of unique contributions a campaign receives. Funds are then disbursed directly to the community treasury.',
    },
    {
      question: 'How is this different from traditional crowdfunding?',
      answer: 'Relay Funder is community-driven rather than platform-driven. Leaders propose projects they know will work, supporters worldwide can contribute, and the Match Fund amplifies impact. Everything is built with dignity and agency for refugees and displaced communities at the center.',
    },
    {
      question: 'What kind of projects get funded?',
      answer: 'Projects are led by trusted community leaders and typically focus on essential needs such as housing, water, food security, skill development, education, and small business resilience.  All projects are proposed by community leaders who understand local needs and have existing trust within their communities.',
    },
    {
      question: 'How do you ensure real impact and transparency?',
      answer: 'Community leaders provide updates and reporting, so donors can clearly see where funds went and what outcomes were achieved. We are working on on-chain impact verification, stay tuned!',
    },
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Clear answers about how Relay Funder works, where funds go, and how we ensure 
            community-led solutions get the support they deserve.
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface interactive-base"
                >
                  <h3 className="font-semibold text-text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openItem === index ? (
                    <ChevronDown size={20} className="text-accent flex-shrink-0" />
                  ) : (
                    <ChevronRight size={20} className="text-text-muted flex-shrink-0" />
                  )}
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-4">
                    <p className="text-text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-section-title text-text-primary mb-6">
              Still have questions?
            </h2>
            <p className="text-text-secondary mb-8">
              We're here to help. Reach out to learn more about how Relay Funder works 
              or how you can get involved.
            </p>
            <a
              href="mailto:info@relayfunder.com"
              className="btn-quantum"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;