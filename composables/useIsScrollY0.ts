export function useIsScrollY0() {
  const isScrollY0 = ref(true);
  onMounted(() => {
    window.addEventListener('scroll', () => {
      isScrollY0.value = window.scrollY === 0;
    });
  });

  return { isScrollY0 };
}
