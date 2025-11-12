import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAppUrl(): string {
  // Check if we're in staging environment
  const isStaging = window.location.hostname.includes('staging') ||
                   window.location.hostname.includes('localhost') ||
                   window.location.hostname.includes('127.0.0.1');

  return isStaging ? 'https://staging.app.relayfunder.com' : 'https://app.relayfunder.com';
}
