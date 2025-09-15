import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-content mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display font-bold text-xl text-gradient mb-4">
              Relay Funder
            </h3>
            <p className="text-text-muted max-w-md mb-6">
              Empowering refugee communities with locally led aid distribution. Pilots in Kenya and Uganda with Refunite. Supporters worldwide.
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
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
                  Explore Projects (Coming Soon)
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
            Relay Funder Inc., PBC © {new Date().getFullYear()}. Building community power, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;