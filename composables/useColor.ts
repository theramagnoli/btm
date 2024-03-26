import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { TourId } from '~/types/TourId';
import { getTourColor } from '~/helpers/getTourColor';

export function useColor() {
  const route = useRoute();
  const colorClass = computed<string>(() => {
    const { isInTour } = useIsInTour();
    const tourId = route.params.id as TourId;
    const tourColor = getTourColor(tourId);
    return isInTour.value
      ? `bg-${tourColor}-300 dark:bg-${tourColor}-700`
      : 'bg-stone-50 dark:bg-stone-950';
  });

  return { colorClass };
}
