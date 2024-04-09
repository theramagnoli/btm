export function useHasScrolledToBottom() {
  const hasScrolledToBottom = ref(false);
  onMounted(() => {
    window.addEventListener('scroll', () => {
      hasScrolledToBottom.value =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
    });
  });

  return { hasScrolledToBottom };
}
