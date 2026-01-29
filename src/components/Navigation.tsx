import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLink, Menu, X } from 'lucide-react';
import relayFunderLogo from '@/assets/RelayFunder_highres_transparent-horizontal.png';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeAwareImage } from '@/hooks/useThemeLogo';
import { NEWSLETTER_URL } from '@/config/links';
import { trackNavigation, trackCTAClick } from '@/lib/analytics';
import { getAppUrl } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Usecase', href: '/use-case' },
    { name: 'Partners', href: '/partners' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Newsletter', href: NEWSLETTER_URL, external: true },
  ];

  const isActive = (href: string, isExternal?: boolean) => !isExternal && location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-quantum/20">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => trackNavigation('Home', 'Navigation Logo')}
          >
            <ThemeAwareImage src={relayFunderLogo} alt="Relay Funder" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-base font-medium text-text-secondary hover:text-quantum inline-flex items-center gap-1"
                  aria-label={`${item.name} (opens in a new tab)`}
                  onClick={() => trackNavigation(item.name, 'Navigation Menu')}
                >
                  {item.name}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`interactive-base font-medium ${
                    isActive(item.href, item.external)
                      ? 'text-quantum'
                      : 'text-text-secondary hover:text-quantum'
                  }`}
                  onClick={() => trackNavigation(item.name, 'Navigation Menu')}
                  {...(isActive(item.href, item.external) && { 'aria-current': 'page' })}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={getAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quantum text-white text-sm px-4 py-2 rounded-xl border border-quantum hover:bg-quantum/90 transition-colors font-semibold"
              onClick={() => trackCTAClick('Explore Campaigns', 'Navigation Desktop')}
            >
              Explore Campaigns
            </a>
            <Link
              to="/sponsors"
              className="btn-ghost text-sm px-4 py-2"
              onClick={() => trackCTAClick('Sponsor Match Fund', 'Navigation Desktop')}
            >
              Sponsor Match Fund
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-secondary hover:text-accent interactive-base"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-base font-medium py-2 text-text-secondary hover:text-accent inline-flex items-center gap-1"
                    aria-label={`${item.name} (opens in a new tab)`}
                    onClick={() => {
                      setIsOpen(false);
                      trackNavigation(item.name, 'Mobile Navigation Menu');
                    }}
                  >
                    {item.name}
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`interactive-base font-medium py-2 ${
                      isActive(item.href, item.external)
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                    onClick={() => {
                      setIsOpen(false);
                      trackNavigation(item.name, 'Mobile Navigation Menu');
                    }}
                    {...(isActive(item.href, item.external) && { 'aria-current': 'page' })}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={getAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-primary text-center text-sm px-6 py-2"
                  onClick={() => trackCTAClick('Explore Campaigns', 'Mobile Navigation')}
                >
                  Explore Campaigns
                </a>
                <Link
                  to="/sponsors"
                  className="block btn-ghost text-center text-sm px-6 py-2"
                  onClick={() => trackCTAClick('Sponsor the Match Fund', 'Mobile Navigation')}
                >
                  Sponsor the Match Fund
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
