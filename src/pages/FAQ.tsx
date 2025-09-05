import Layout from '@/components/Layout';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Relay Funder ensure the safety of funds?',
      answer: 'Relay Funder uses secure digital infrastructure with privacy-preserving identity verification. All transactions are recorded on a verifiable ledger, and funds are released based on verified project milestones.',
    },
    {
      question: 'How are funds actually processed and stored?',
      answer: 'All funds are managed through CC Protocol smart contracts that function as secure digital treasuries on the blockchain. Contributions are held in stable coins (digital currencies tied to stable values like the US dollar) and stored transparently on-chain where anyone can verify them. Funds can only be released when project milestones are met and approved by designated administrators, ensuring accountability at every step.',
    },
    {
      question: 'Where do the funds actually go?',
      answer: 'Funds go directly to verified community leaders who have proposed specific projects. Each leader is part of Refunite\'s trusted Community Leader Network, which has been built over years of relationship-building and verification.',
    },
    {
      question: 'How long do projects typically run?',
      answer: 'Most projects run for 3-6 months, with clear milestones and regular updates. Leaders set their own timelines based on project scope and community needs.',
    },
    {
      question: 'Which regions does Relay Funder currently serve?',
      answer: 'We\'re piloting in Kenya and Uganda through our partnership with Refunite, with plans to expand globally. Community leaders worldwide can already engage with the platform.',
    },
    {
      question: 'Who are Match Fund Sponsors and how do they work?',
      answer: 'Match Fund Sponsors are organizations or individuals who contribute to the Match Fund, which amplifies individual contributions. The more community backers a project has, the larger the match it receives from the Sponsor pool.',
    },
    {
      question: 'How can campaigns apply to participate in match funds?',
      answer: 'Campaign participation in match funds requires admin approval and depends on the specific topic and round sponsor requirements. Not every campaign is automatically eligible for every match fund - each round has its own focus areas and criteria set by the sponsoring organization. Community leaders must apply and be accepted based on project alignment, leader verification, and sponsor guidelines.',
    },
    {
      question: 'What makes a contribution eligible for match fund amplification?',
      answer: 'To ensure fair distribution, we use sybil-resistant verification through providers like Holonym and Human.tech to confirm proof of humanity. This prevents fake accounts from gaming the system. Match calculations favor genuine community support through small individual contributions rather than large single donations, ensuring that projects with broad grassroots backing receive larger matches from the sponsor pool.',
    },
    {
      question: 'When and how are match funds distributed to campaigns?',
      answer: 'Match funds are distributed after each funding round concludes. We conduct thorough validation processes to ensure all contributions are legitimate and perform comprehensive checks to prevent gaming of the system. Once validation is complete, calculated match funds are disbursed to qualifying campaign treasuries.',
    },
    {
      question: 'What launch geographies are planned?',
      answer: 'We\'re starting with communities across East Africa, West Africa, and the Horn of Africa through Refunite\'s network, with expansion to other regions based on community partnerships and demand.',
    },
    {
      question: 'How is this different from traditional crowdfunding?',
      answer: 'Relay Funder is community-driven rather than platform-driven. Leaders propose projects they know will work, supporters worldwide can contribute, and the Match Fund amplifies impact. Everything is built with dignity and agency for refugees and displaced communities at the center.',
    },
    {
      question: 'Why are stable coin payments faster than traditional funding methods?',
      answer: 'Traditional crowdfunding can take weeks or months to process payments through banks, especially for cross-border transfers. With stable coins, funds transfer instantly across the globe without currency conversion delays or high banking fees. Community leaders can access funding within hours instead of waiting for international wire transfers, making it possible to respond quickly to urgent community needs.',
    },
    {
      question: 'What kind of projects get funded?',
      answer: 'Projects range from education and skill development to micro-enterprise and climate resilience initiatives. All projects are proposed by community leaders who understand local needs and have existing trust within their communities.',
    },
    {
      question: 'How do you ensure real impact and transparency?',
      answer: 'We work exclusively with validated partners like Refunite who have their own proven impact measurement methods and trusted community leader networks. Currently, we track impact metrics through our partners\' established systems and only work with leaders who have demonstrated community trust. We\'re building enhanced transparency features including milestone-based fund disbursement tied to verified progress and an on-chain impact proof system that will create a permanent, public record of every project\'s outcomes and community benefits.',
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
              className="btn-primary"
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