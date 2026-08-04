import type { Exercise } from "~/types/exercise";

export interface ExercisesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}
interface CategoriesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {id: number; name: string}[];
  }

export function useExercises() {
  return useFetch<ExercisesResponse>("https://wger.de/api/v2/exerciseinfo/?limit=200",); // {immediate: false} if don't want to run on page load
}
export function useExercise(id: string) {
  return useFetch<Exercise>(`https://wger.de/api/v2/exerciseinfo/${id}/`);
}

export function useCategories() {
  return useFetch<CategoriesResponse>("https://wger.de/api/v2/exercisecategory/");
}