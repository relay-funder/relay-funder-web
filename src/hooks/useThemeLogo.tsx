import { useTheme } from '@/contexts/ThemeContext';
import refuniteBlackLogo from '@/assets/logos/logo-refunite-black.png';
import refuniteWhiteLogo from '@/assets/logos/logo-refunite-white.png';
import relayFunderLogo from '@/assets/RelayFunder_highres_transparent-horizontal.png';
import relayFunderWhiteLogo from '@/assets/RelayFunder-white_highres_transparent-horizontal.png';
import fundingTheCommonsLogo from '@/assets/logos/logo-ftc-icon.png';
import fundingTheCommonsWhiteLogo from '@/assets/logos/logo-ftc-icon-white.png';
import hypercertsLogo from '@/assets/logos/logo-hypercerts.png';
import hypercertsWhiteLogo from '@/assets/logos/logo-hypercerts-white.png';

// Logo mappings for different themes
const logoMappings = {
  [refuniteBlackLogo]: {
    light: refuniteBlackLogo,
    dark: refuniteWhiteLogo,
  },
  [relayFunderLogo]: {
    light: relayFunderLogo,
    dark: relayFunderWhiteLogo,
  },
  [fundingTheCommonsLogo]: {
    light: fundingTheCommonsLogo,
    dark: fundingTheCommonsWhiteLogo,
  },
  [hypercertsLogo]: {
    light: hypercertsLogo,
    dark: hypercertsWhiteLogo,
  },
} as const;

export function useThemeLogo(logoPath: string): string {
  const { actualTheme } = useTheme();

  // Check if we have a theme-specific mapping for this logo
  const mapping = logoMappings[logoPath as keyof typeof logoMappings];

  if (mapping) {
    return mapping[actualTheme];
  }

  // For logos without specific mappings, return original path
  return logoPath;
}

// Alternative approach: Component that automatically handles theme switching
interface ThemeAwareImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ThemeAwareImage({ src, alt, className, ...props }: ThemeAwareImageProps) {
  const { actualTheme } = useTheme();
  const themeSrc = useThemeLogo(src);

  return (
    <img
      src={themeSrc}
      alt={alt}
      className={`theme-aware-image ${actualTheme === 'dark' ? 'dark-theme' : 'light-theme'} ${className || ''}`}
      {...props}
    />
  );
}
