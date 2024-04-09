export function usePrefersDarkMode() {
  const prefersDarkMode = ref(false);
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    prefersDarkMode.value = mediaQuery.matches;
    mediaQuery.addEventListener('change', () => {
      prefersDarkMode.value = mediaQuery.matches;
    });
  });
  return { prefersDarkMode };
}
