import { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import WhyNow from '@/components/sections/WhyNow';
import PartnersSection from '@/components/sections/PartnersSection';
import WhatRelayDoes from '@/components/sections/WhatRelayDoes';
import CommunityMatch from '@/components/sections/CommunityMatch';
import PilotsProof from '@/components/sections/PilotsProof';
import AkashicArchive from '@/components/sections/AkashicArchive';
import { trackPageView } from '@/lib/analytics';

const Index = () => {
  useEffect(() => {
    trackPageView('Home');
  }, []);
  return (
    <Layout>
      <Hero />
      <WhyNow />
      <WhatRelayDoes />
      <PartnersSection />
      <CommunityMatch />
      <PilotsProof />
      <AkashicArchive />
    </Layout>
  );
};

export default Index;
