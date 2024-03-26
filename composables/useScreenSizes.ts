import { useMediaQuery } from '@vueuse/core';

export function useScreenSizes() {
  const isMobile = useMediaQuery('(max-width: 520px)');
  const isLargeMobile = useMediaQuery('(max-width: 650px)');
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isDesktop = useMediaQuery('(min-width: 1400px)');

  return { isMobile, isLargeMobile, isTablet, isDesktop };
}
