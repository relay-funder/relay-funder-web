import refuniteLogo from '@/assets/logos/logo-refunite-black.png';
import celoLogo from '@/assets/logos/logo-celo.png';
import gitcoinLogo from '@/assets/logos/logo-gitcoin.png';
import humanTechLogo from '@/assets/logos/logo-human-tech-blue.jpg';
import grassrootsEconomicsLogo from '@/assets/logos/logo-grassroots-economics.png';
import oakNetworkLogo from '@/assets/logos/logo-oaknetwork.png';
import filecoinFoundationLogo from '@/assets/logos/logo-filecoin-foundation.png';
import fundingTheCommonsLogo from '@/assets/logos/logo-ftc-icon.png';
import hypercertsLogo from '@/assets/logos/logo-hypercerts.png';
import protocolLabsLogo from '@/assets/logos/logo-protocol-labs-black.png';

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
    name: 'Oak Network',
    logo: oakNetworkLogo,
    role: 'Crowdfunding infrastructure',
    description:
      "Oak Network builds the behind the scenes 'engine' that lets creators run their own Kickstarter style campaigns, online shops, and preorders, with blockchain quietly handling the money and trust in the background.",
    website: 'https://www.oaknetwork.org/',
  },
  {
    name: 'Celo',
    logo: celoLogo,
    role: 'Blockchain infrastructure',
    description:
      "Celo's mobile-first blockchain provides the underlying infrastructure for Relay Funder's financial operations. Their carbon-negative network enables fast, low-cost transactions optimized for mobile devices, making digital payments accessible to communities worldwide.",
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
      "Grassroots Economics brings expertise in community currency design and local economic resilience. Their work with complementary currencies in Kenya and beyond informs Relay Funder's approach to sustainable, community-owned financial systems.",
    website: 'https://grassrootseconomics.org',
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
      "Gitcoin's quadratic funding mechanisms amplify community contributions through democratic allocation of matching funds. Their expertise in public goods funding helps Relay Funder maximize impact by prioritizing campaigns with broad community support.",
    website: 'https://gitcoin.co',
  },
  {
    name: 'Funding the Commons',
    logo: fundingTheCommonsLogo,
    role: 'Public goods funding expertise',
    description:
      "Funding the Commons brings deep expertise in public goods funding mechanisms and community governance. Their work advancing sustainable funding models for open source and public benefit projects helps inform Relay Funder's approach to transparent, community-driven resource allocation.",
    website: 'https://fundingthecommons.io/',
  },
  {
    name: 'Hypercerts',
    logo: hypercertsLogo,
    role: 'Impact certification and verification',
    description:
      'Hypercerts provides a framework for measuring, verifying, and funding positive impact. Their protocol enables transparent tracking of social outcomes, ensuring that Relay Funder campaigns can demonstrate verifiable results to sponsors and supporters.',
    website: 'https://www.hypercerts.org/',
  },
  {
    name: 'Protocol Labs',
    logo: protocolLabsLogo,
    role: 'Web3 infrastructure and research',
    description:
      'Protocol Labs drives breakthroughs in decentralized computing and web3 infrastructure. Their network of startups and research projects provides the foundational technologies that enable Relay Funder\'s transparent, community-owned funding mechanisms.',
    website: 'https://www.protocol.ai/',
  },
];
