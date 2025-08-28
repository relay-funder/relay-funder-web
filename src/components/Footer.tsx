import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xl text-gradient mb-4">
              Relay
            </h3>
            <p className="text-text-muted max-w-md">
              Community-driven crowdfunding for refugee and crisis-affected communities.
              Pilots in Africa with Refunite. Supporters worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://app.relay.community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-accent interactive-base"
                >
                  Explore Projects
                </a>
              </li>
              <li>
                <Link to="/partners" className="text-text-muted hover:text-accent interactive-base">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-text-muted hover:text-accent interactive-base">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-text-muted hover:text-accent interactive-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-text-muted hover:text-accent interactive-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text-muted hover:text-accent interactive-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@relay.community"
                  className="text-text-muted hover:text-accent interactive-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-subtle text-sm">
            © 2024 Relay. Building community power, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;