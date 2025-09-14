import refuniteLogo from '@/assets/logos/logo-refunite.png';
import celoLogo from '@/assets/logos/logo-celo.png';
import operaLogo from '@/assets/logos/logo-opera-mini.png';
import gitcoinLogo from '@/assets/logos/logo-gitcoin.png';
import humanTechLogo from '@/assets/logos/logo-human-tech-blue.jpg';
import grassrootsEconomicsLogo from '@/assets/logos/logo-grassroots-economics.png';
import ccProtocolLogo from '@/assets/logos/logo-cc-protocol.jpeg';
import filecoinFoundationLogo from '@/assets/logos/logo-filecoin-foundation.png';
import gsrFoundationLogo from '@/assets/logos/logo-icon-gsr.png';

export interface Partner {
  name: string;
  logo: string;
  role: string;
  website: string;
}

export interface FoundingPartner {
  name: string;
  logo: string;
  description: string;
  role: string;
  website: string;
}

export const foundingPartner: FoundingPartner = {
  name: 'Refunite',
  logo: refuniteLogo,
  description: 'Our founding partner brings the Community Leader Network—100k+ trusted leaders with 100M+ reach across crisis-affected communities worldwide.',
  role: 'Community Leader Network & Distribution',
  website: 'https://refunite.org',
};

export const partners: Partner[] = [
  { 
    name: 'CC Protocol', 
    logo: ccProtocolLogo,
    role: 'Kickstarted supported crowdfunding infrastructure',
    website: 'https://www.ccprotocol.xyz/'
  },
  { 
    name: 'Celo', 
    logo: celoLogo,
    role: 'Blockchain infrastructure',
    website: 'https://celo.org'
  },
  { 
    name: 'human.tech', 
    logo: humanTechLogo,
    role: 'Zero-knowledge identity verification',
    website: 'https://human.tech'
  },
  { 
    name: 'Grassroots Economics', 
    logo: grassrootsEconomicsLogo,
    role: 'Community currency systems',
    website: 'https://grassrootseconomics.org'
  },
  { 
    name: 'Opera Mini', 
    logo: operaLogo,
    role: 'MiniPay wallet distribution',
    website: 'https://www.minipay.to/'
  },
  { 
    name: 'Filecoin Foundation', 
    logo: filecoinFoundationLogo,
    role: 'IPFS long-term storage',
    website: 'https://fil.org'
  },
  { 
    name: 'Gitcoin', 
    logo: gitcoinLogo,
    role: 'Quadratic funding and matching',
    website: 'https://gitcoin.co'
  },
  {
    name: 'GSR Foundation',
    logo: gsrFoundationLogo,
    role: 'Independent charity and grantmaker',
    website: 'https://gsr.io/'
  }
];
