import { useState } from 'react';

const partners = [
  { name: 'Refunite', role: 'Community Leader Network' },
  { name: 'Celo', role: 'Mobile-first blockchain rails' },
  { name: 'Opera', role: 'MiniPay distribution' },
  { name: 'Gitcoin', role: 'Quadratic funding engine' },
  { name: 'human.tech', role: 'RelayID identity verification' },
  { name: 'CoalaPay', role: 'Payment infrastructure' },
  { name: 'Grassroots Economics', role: 'Community currency systems' },
  { name: 'Kickstarter', role: 'CC Protocol integration' },
  { name: 'Filecoin Foundation', role: 'IPFS long-term storage' },
];

const PartnerOrbit = () => {
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center shadow-glow">
          <span className="font-display font-bold text-white text-sm">Relay</span>
        </div>
      </div>

      {/* Orbiting partners */}
      {partners.map((partner, index) => {
        const angle = (index / partners.length) * 360;
        const radius = 120;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <div
            key={partner.name}
            className="absolute top-1/2 left-1/2 w-12 h-12"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              animationDelay: `${index * 0.2}s`,
            }}
            onMouseEnter={() => setHoveredPartner(partner.name)}
            onMouseLeave={() => setHoveredPartner(null)}
          >
            <div
              className={`
                w-full h-full rounded-full bg-surface border-2 border-border
                flex items-center justify-center text-xs font-medium
                hover:border-accent hover:shadow-medium interactive-base
                ${hoveredPartner === partner.name ? 'scale-110 z-20' : ''}
              `}
            >
              <span className="text-text-primary truncate px-1">
                {partner.name.slice(0, 4)}
              </span>
            </div>

            {/* Tooltip */}
            {hoveredPartner === partner.name && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-30">
                <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-large">
                  <p className="text-sm font-medium text-text-primary whitespace-nowrap">
                    {partner.name}
                  </p>
                  <p className="text-xs text-text-muted whitespace-nowrap">
                    {partner.role}
                  </p>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-60 h-60 rounded-full border border-border opacity-20 animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-80 h-80 rounded-full border border-border opacity-10"></div>
      </div>
    </div>
  );
};

export default PartnerOrbit;