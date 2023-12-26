import { defineStore } from "pinia";
import { useMediaQuery } from "@vueuse/core";

const useAppStateStore = defineStore("appState", () => {
  const route = useRoute();
  const isMobile = useMediaQuery("(max-width: 519px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isDesktop = useMediaQuery("(min-width: 1400px)");
  const isDropdownOpen = ref(false);
  const prefersDarkMode = ref(useMediaQuery("(prefers-color-scheme: dark)"));
  const scrollYEqualToZero = ref(true);
  const isInToursPage = computed(() => {
    const routePathParts = route.path.split("/");
    return (
      routePathParts[1] === "tours" &&
      routePathParts[2] &&
      routePathParts[2] !== ""
    );
  });

  function toggleDarkMode() {
    prefersDarkMode.value = !prefersDarkMode.value;
  }

  function setTheme(prefersDark: boolean) {
    prefersDarkMode.value = prefersDark;
  }

  onMounted(() => {
    window.addEventListener("scroll", () => {
      scrollYEqualToZero.value = window.scrollY === 0;
    });
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isDropdownOpen,
    prefersDarkMode,
    scrollYEqualToZero,
    isInToursPage,
    setTheme,
  };
});

export default useAppStateStore;
