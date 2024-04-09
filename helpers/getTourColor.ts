import { tourColorDictionary } from 'assets/json/tourColorDictionary';
import { TourId } from '~/types/TourId';

export const getTourColor = (tourId: TourId): string => {
  return tourColorDictionary[tourId];
};
