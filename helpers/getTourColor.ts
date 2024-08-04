import { tourColorDict } from 'assets/json/tourColorDict';
import { TourId } from '~/types/TourId';

export const getTourColor = (tourId: TourId): string => {
  return tourColorDict[tourId];
};
