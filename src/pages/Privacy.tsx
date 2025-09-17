import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { trackPageView } from '@/lib/analytics';

const LAST_UPDATED = 'September 15, 2025';

const Privacy = () => {
  useEffect(() => {
    trackPageView('Privacy Policy');
  }, []);
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-surface">
        <div className="max-w-content mx-auto px-6 text-center">
          <h1 className="text-hero text-text-primary mb-6 pb-2">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're committed to protecting your privacy and maintaining transparency about how we
            collect and use your information. Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                1. Information We Collect
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We collect information you provide directly to us and information automatically
                collected through your use of our services:
              </p>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Information You Provide:
              </h3>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc mb-4">
                <li>Contact information (public wallet address, name, email address)</li>
                <li>Payment information for contributions (processed by third-party providers)</li>
                <li>Communication preferences and feedback</li>
                <li>Identity verification data as required for compliance</li>
              </ul>

              <h3 className="text-lg font-semibold text-text-primary mb-3">
                Automatically Collected Information:
              </h3>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Device and browser information</li>
                <li>IP address and location data</li>
                <li>Usage patterns and platform interactions</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                2. How We Use Your Information
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use collected information for the following purposes:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Processing and facilitating financial contributions</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending updates about funded projects and platform developments</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Preventing fraud and ensuring platform security</li>
                <li>Improving our services and user experience</li>
                <li>Conducting research and analytics to better serve our mission</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share information
                in the following circumstances:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party vendors who assist in
                  platform operations
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, regulation, or legal
                  process
                </li>
                <li>
                  <strong>Safety and Security:</strong> To protect rights, property, or safety of
                  users and the platform
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with corporate transactions
                  like mergers or acquisitions
                </li>
                <li>
                  <strong>With Consent:</strong> When you explicitly consent to information sharing
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                4. Data Security and Protection
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Privacy-preserving identity verification systems</li>
                <li>Regular security audits and monitoring</li>
                <li>Limited access controls for internal team members</li>
                <li>Secure third-party integrations and payment processing</li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                While we strive to protect your information, no internet transmission is 100%
                secure. We cannot guarantee absolute security but commit to promptly addressing any
                security incidents.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                We use cookies and similar technologies to enhance your experience:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>
                  <strong>Essential Cookies:</strong> Required for platform functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand usage patterns
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                You can manage cookie preferences through your browser settings, though disabling
                certain cookies may affect platform functionality.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">6. Your Privacy Rights</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your
                personal information:
              </p>
              <ul className="text-text-secondary space-y-2 ml-6 list-disc">
                <li>
                  <strong>Access:</strong> Request copies of your personal information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to another service
                </li>
                <li>
                  <strong>Restriction:</strong> Request limitation of processing activities
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain types of data processing
                </li>
              </ul>
              <p className="text-text-secondary leading-relaxed mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:info@relayfunder.com" className="text-accent hover:underline">
                  info@relayfunder.com
                </a>
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                7. International Data Transfers
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our services may involve transferring your information across international borders.
                We ensure appropriate safeguards are in place for international transfers, including
                compliance with applicable data protection frameworks and contractual protections
                with service providers.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">8. Data Retention</h2>
              <p className="text-text-secondary leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, comply with legal obligations, resolve disputes,
                and enforce agreements. When information is no longer needed, we securely delete or
                anonymize it.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">9. Children's Privacy</h2>
              <p className="text-text-secondary leading-relaxed">
                Our services are not intended for children under 18 years of age. We do not
                knowingly collect personal information from children under 18. If we become aware
                that we have collected information from a child under 18, we will take steps to
                delete that information promptly.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-section-title text-text-primary mb-6">
                10. Changes to This Policy
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or legal requirements. We will notify you of any material changes by
                posting the updated policy on our website and updating the "Last Updated" date. Your
                continued use of our services after such changes constitutes acceptance of the
                updated policy.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-section-title text-text-primary mb-6">11. Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us:
              </p>
              <div className="mt-4 space-y-2 text-text-secondary">
                <p>
                  Email:{' '}
                  <a href="mailto:info@relayfunder.com" className="text-accent hover:underline">
                    info@relayfunder.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
