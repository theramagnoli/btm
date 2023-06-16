import { defineStore } from "pinia";
import { useMediaQuery } from "@vueuse/core";

const useAppStateStore = defineStore("appState", () => {
  const route = useRoute();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1000px)");
  const isLaptop = useMediaQuery("(max-width: 1400px)");
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

  function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
  }

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
    isLaptop,
    isDesktop,
    isDropdownOpen,
    prefersDarkMode,
    scrollYEqualToZero,
    isInToursPage,
    toggleDropdown,
    toggleDarkMode,
    setTheme,
  };
});

export default useAppStateStore;
