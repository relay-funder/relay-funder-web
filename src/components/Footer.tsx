import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xl text-gradient mb-4">Relay Funder</h3>
            <p className="text-text-muted max-w-md mb-6">
              Empowering refugee communities with locally led aid distribution. Pilots in Kenya and
              Uganda with Refunite. Supporters worldwide.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-text-muted text-sm font-medium">Join the community:</span>
              <a
                href="https://x.com/RelayFunder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-secondary hover:bg-accent/10 border border-border hover:border-accent/20 transition-all duration-200 group"
                aria-label="Follow Relay Funder on X (Twitter)"
              >
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/relay-funder/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-secondary hover:bg-accent/10 border border-border hover:border-accent/20 transition-all duration-200 group"
                aria-label="Follow Relay Funder on GitHub"
              >
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors duration-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Platform</h4>
            <ul className="space-y-2">
              <li>
                <div className="text-text-muted cursor-not-allowed">
                  Explore Campaigns (Coming Soon)
                </div>
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
                  href="mailto:info@relayfunder.com"
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
            Relay Funder Inc., PBC © {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
