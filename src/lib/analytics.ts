import { track } from '@vercel/analytics';

// Helper function to check if we should track analytics
const shouldTrack = (): boolean => {
  // Don't track in development
  if (!import.meta.env.PROD) {
    return false;
  }

  // Respect Do Not Track header
  if (navigator.doNotTrack === '1') {
    return false;
  }

  return true;
};

// Page view tracking
export const trackPageView = (pageName: string, additionalData?: Record<string, unknown>) => {
  if (!shouldTrack()) return;

  track('page_view', {
    page: pageName,
    ...additionalData,
  });
};

// Call-to-action tracking
export const trackCTAClick = (
  ctaName: string,
  section?: string,
  additionalData?: Record<string, unknown>
) => {
  if (!shouldTrack()) return;

  track('cta_click', {
    cta_name: ctaName,
    section: section,
    ...additionalData,
  });
};

// Navigation tracking
export const trackNavigation = (
  destination: string,
  source?: string,
  additionalData?: Record<string, unknown>
) => {
  if (!shouldTrack()) return;

  track('navigation', {
    destination,
    source,
    ...additionalData,
  });
};

// Button click tracking
export const trackButtonClick = (
  buttonName: string,
  buttonType?: string,
  additionalData?: Record<string, unknown>
) => {
  if (!shouldTrack()) return;

  track('button_click', {
    button_name: buttonName,
    button_type: buttonType,
    ...additionalData,
  });
};

// Link click tracking
export const trackLinkClick = (
  linkText: string,
  linkUrl: string,
  linkType?: string,
  additionalData?: Record<string, unknown>
) => {
  if (!shouldTrack()) return;

  track('link_click', {
    link_text: linkText,
    link_url: linkUrl,
    link_type: linkType,
    ...additionalData,
  });
};

// Export shouldTrack for external use
export { shouldTrack };
