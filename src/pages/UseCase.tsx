import { useEffect } from 'react';
import { USE_CASE_CAPSULE_URL } from '@/config/links';
import { trackPageView } from '@/lib/analytics';

const UseCase = () => {
  useEffect(() => {
    trackPageView('Use Case');
  }, []);

  return (
    <iframe
      src={USE_CASE_CAPSULE_URL}
      title="Relay Funder — Use Case"
      className="fixed inset-0 h-full w-full border-0"
      allow="fullscreen; clipboard-write"
    />
  );
};

export default UseCase;
