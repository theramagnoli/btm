import { useRoute } from 'vue-router';

export function useIsInTour() {
  const isInTour = computed(() => {
    const route = useRoute();
    const routePathParts = route.path.split('/');
    return (
      routePathParts[1] === 'tours' &&
      routePathParts[2] &&
      routePathParts[2] !== ''
    );
  });

  return { isInTour };
}
