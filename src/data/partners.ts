import refuniteLogo from '@/assets/logos/logo-refunite-black.png';
import celoLogo from '@/assets/logos/logo-celo.png';
import operaLogo from '@/assets/logos/logo-opera-mini.png';
import gitcoinLogo from '@/assets/logos/logo-gitcoin.png';
import humanTechLogo from '@/assets/logos/logo-human-tech-blue.jpg';
import grassrootsEconomicsLogo from '@/assets/logos/logo-grassroots-economics.png';
import ccProtocolLogo from '@/assets/logos/logo-cc-protocol.jpeg';
import filecoinFoundationLogo from '@/assets/logos/logo-filecoin-foundation.png';
import fundingTheCommonsLogo from '@/assets/logos/logo-ftc-icon.png';

export interface Partner {
  name: string;
  logo: string;
  role: string;
  description: string;
  website: string;
}

export type FoundingPartner = Partner;

export const foundingPartner = {
  name: 'Refunite',
  logo: refuniteLogo,
  description:
    'Our founding partner brings the Community Leader Network—109k+ trusted leaders with 100M+ reach across crisis-affected communities worldwide.',
  role: 'Community Leader Network & Distribution',
  website: 'https://refunite.org',
} as const satisfies FoundingPartner;

export const partners: Partner[] = [
  {
    name: 'CC Protocol',
    logo: ccProtocolLogo,
    role: 'Kickstarter supported crowdfunding infrastructure',
    description:
      "CC Protocol is supported by Kickstarter and provides the foundational open-source crowdfunding infrastructure that powers RelayFunder's on-chain campaign creation and management. Their protocol enables transparent, community-driven fundraising with built-in governance and accountability mechanisms.",
    website: 'https://www.ccprotocol.xyz/',
  },
  {
    name: 'Celo',
    logo: celoLogo,
    role: 'Blockchain infrastructure',
    description:
      "Celo's mobile-first blockchain provides the underlying infrastructure for RelayFunder's financial operations. Their carbon-negative network enables fast, low-cost transactions optimized for mobile devices, making digital payments accessible to communities worldwide.",
    website: 'https://celo.org',
  },
  {
    name: 'human.tech',
    logo: humanTechLogo,
    role: 'Zero-knowledge identity verification',
    description:
      "human.tech's zero-knowledge proof technology enables dignified identity verification without compromising personal data, ensuring both security and privacy for vulnerable communities.",
    website: 'https://human.tech',
  },
  {
    name: 'Grassroots Economics',
    logo: grassrootsEconomicsLogo,
    role: 'Community currency systems',
    description:
      "Grassroots Economics brings expertise in community currency design and local economic resilience. Their work with complementary currencies in Kenya and beyond informs RelayFunder's approach to sustainable, community-owned financial systems.",
    website: 'https://grassrootseconomics.org',
  },
  {
    name: 'Opera Mini',
    logo: operaLogo,
    role: 'MiniPay wallet distribution',
    description:
      "Opera's MiniPay wallet provides seamless access to RelayFunder through their mobile browser ecosystem. With millions of users across Africa, Opera enables direct integration of funding capabilities into everyday mobile experiences.",
    website: 'https://www.minipay.to/',
  },
  {
    name: 'Filecoin Foundation',
    logo: filecoinFoundationLogo,
    role: 'IPFS long-term storage',
    description:
      'Filecoin Foundation ensures the long-term preservation of campaign data, community records, and impact documentation through decentralized storage. Their IPFS network provides censorship-resistant archiving for accountability and transparency.',
    website: 'https://fil.org',
  },
  {
    name: 'Gitcoin',
    logo: gitcoinLogo,
    role: 'Quadratic funding and matching',
    description:
      "Gitcoin's quadratic funding mechanisms amplify community contributions through democratic allocation of matching funds. Their expertise in public goods funding helps RelayFunder maximize impact by prioritizing projects with broad community support.",
    website: 'https://gitcoin.co',
  },
  {
    name: 'Funding the Commons',
    logo: fundingTheCommonsLogo,
    role: 'Public goods funding expertise',
    description:
      "Funding the Commons brings deep expertise in public goods funding mechanisms and community governance. Their work advancing sustainable funding models for open source and public benefit projects helps inform RelayFunder's approach to transparent, community-driven resource allocation.",
    website: 'https://fundingthecommons.io/',
  },
];
