import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Projects', href: 'https://app.relayfunder.com', external: true },
    { name: 'Partners', href: '/partners' },
    { name: 'Sponsors', href: '/sponsors' },
    { name: 'FAQ', href: '/faq' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-quantum/20">
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display font-medium text-xl text-text-primary hover-quantum">
            Relay Funder
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-quantum interactive-base font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`interactive-base font-medium ${
                    isActive(item.href)
                      ? 'text-quantum'
                      : 'text-text-secondary hover:text-quantum'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="btn-ghost text-sm px-4 py-2 opacity-60 cursor-not-allowed">
              Coming Soon
            </div>
            <Link to="/sponsors" className="btn-quantum text-sm px-4 py-2">
              Sponsor Match Fund
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent interactive-base"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent interactive-base font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`interactive-base font-medium py-2 ${
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-text-secondary hover:text-accent'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 space-y-3">
                <div className="block btn-secondary text-center text-sm px-6 py-2 opacity-60 cursor-not-allowed">
                  Coming Soon
                </div>
                <Link to="/sponsors" className="block btn-primary text-center text-sm px-6 py-2">
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