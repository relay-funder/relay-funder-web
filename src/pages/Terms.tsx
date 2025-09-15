import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { trackPageView } from '@/lib/analytics';

const Terms = () => {
  useEffect(() => {
    trackPageView('Terms of Service');
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of the Relay Funder platform and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">1. Acceptance of Terms</h2>
              <p className="text-text-secondary leading-relaxed">
                By accessing or using Relay Funder ("we," "us," or "our") platform, you agree to be
                bound by these Terms of Service. If you do not agree to all of these terms, do not
                use our services. Relay Funder Inc., PBC is a Public Benefit Corporation committed
                to empowering refugee communities through community-led funding solutions.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                2. Description of Service
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Relay Funder operates a funding platform that connects supporters worldwide with
                refugee and displaced communities. Our services include:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Facilitating contributions to community-led projects</li>
                <li>Operating match fund programs sponsored by philanthropic partners</li>
                <li>Providing transparency tools for donors and community leaders</li>
                <li>Converting traditional payments to stablecoins for direct distribution</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                3. User Responsibilities
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                By using our platform, you agree to:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Provide accurate and complete information when making contributions</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use the service for any illegal or unauthorized purpose</li>
                <li>Respect the dignity and privacy of community members</li>
                <li>Not attempt to circumvent our security measures</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                4. Financial Transactions
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                All financial contributions made through our platform are:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Voluntary and non-refundable once processed</li>
                <li>Subject to processing fees by third-party payment processors</li>
                <li>Converted to stablecoins for distribution to community treasuries</li>
                <li>Not tax-deductible donations unless specifically indicated</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                We are not responsible for delays or failures in third-party payment processing
                systems.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                5. Intellectual Property
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The Relay Funder platform, including all content, features, and functionality, is
                owned by Relay Funder Inc., PBC and is protected by copyright, trademark, and other
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works from our content without written permission.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                6. Privacy and Data Protection
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Your privacy is important to us. Our collection and use of personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
                We implement privacy-preserving identity verification and secure data handling
                practices.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                7. Disclaimers and Limitations
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Our service is provided "as is" without warranties of any kind. We do not guarantee:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Uninterrupted or error-free operation of the platform</li>
                <li>Specific outcomes from funded projects</li>
                <li>Availability of funds for distribution</li>
                <li>Performance of third-party services</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">8. Termination</h2>
              <p className="text-text-secondary leading-relaxed">
                We reserve the right to suspend or terminate access to our services at any time,
                with or without cause, with or without notice. Upon termination, these Terms will
                remain in effect regarding any contributions already made and any obligations that
                survive termination.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">9. Governing Law</h2>
              <p className="text-text-secondary leading-relaxed">
                These Terms are governed by the laws of the jurisdiction in which Relay Funder Inc.,
                PBC is incorporated, without regard to conflict of law principles. Any disputes will
                be resolved through binding arbitration.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-section-title text-text-primary mb-6">10. Contact Information</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:info@relayfunder.com" className="text-accent hover:underline">
                  info@relayfunder.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
