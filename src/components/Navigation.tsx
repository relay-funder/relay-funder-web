import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import relayFunderLogo from '@/assets/RelayFunder_highres_transparent-horizontal.png';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeAwareImage } from '@/hooks/useThemeLogo';
import { trackNavigation, trackCTAClick } from '@/lib/analytics';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Partners', href: '/partners' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isActive = (href: string) => location.pathname === href;

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
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`interactive-base font-medium ${
                  isActive(item.href) ? 'text-quantum' : 'text-text-secondary hover:text-quantum'
                }`}
                onClick={() => trackNavigation(item.name, 'Navigation Menu')}
                {...(isActive(item.href) && { 'aria-current': 'page' })}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-muted text-text-primary text-sm px-4 py-2 rounded-xl border border-border cursor-not-allowed font-semibold">
              Explore Campaigns (Coming Soon)
            </div>
            <Link
              to="/sponsors"
              className="btn-quantum text-sm px-4 py-2"
              onClick={() => trackCTAClick('Sponsor Match Fund', 'Navigation Desktop')}
            >
              Sponsor Match Fund
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-2">
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
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`interactive-base font-medium py-2 ${
                    isActive(item.href) ? 'text-accent' : 'text-text-secondary hover:text-accent'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    trackNavigation(item.name, 'Mobile Navigation Menu');
                  }}
                  {...(isActive(item.href) && { 'aria-current': 'page' })}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <div className="block bg-muted text-text-primary text-center text-sm px-6 py-2 rounded-xl border border-border cursor-not-allowed font-semibold">
                  Explore Campaigns (Coming Soon)
                </div>
                <Link
                  to="/sponsors"
                  className="block btn-primary text-center text-sm px-6 py-2"
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
