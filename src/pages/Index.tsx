import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import PartnersSection from '@/components/sections/PartnersSection';
import WhatRelayDoes from '@/components/sections/WhatRelayDoes';
import CommunityMatch from '@/components/sections/CommunityMatch';
import PilotsProof from '@/components/sections/PilotsProof';
import AkashicArchive from '@/components/sections/AkashicArchive';
import SponsorsPreview from '@/components/sections/SponsorsPreview';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <PartnersSection />
      <WhatRelayDoes />
      <CommunityMatch />
      <PilotsProof />
      <AkashicArchive />
      <SponsorsPreview />
    </Layout>
  );
};

export default Index;
