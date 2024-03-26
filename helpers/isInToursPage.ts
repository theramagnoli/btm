import { RouteLocationNormalizedLoaded } from 'vue-router';

export function isInTourPage(route: RouteLocationNormalizedLoaded) {
  const routePathParts = route.path.split('/');
  return (
    routePathParts[1] === 'tours' &&
    routePathParts[2] &&
    routePathParts[2] !== ''
  );
}
