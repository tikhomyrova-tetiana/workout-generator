import type { Exercise } from "~/types/exercise";

interface ExercisesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Exercise[];
}
export function useExercises() {
  return useFetch<ExercisesResponse>("https://wger.de/api/v2/exerciseinfo/?limit=100");
}
export function useExercise(uuid: string) {
  return useFetch<Exercise>(`https://wger.de/api/v2/exerciseinfo/${uuid}/`);
}
