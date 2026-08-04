import type { Exercise } from "~/types/exercise";

export function useWorkout() {
    // to save the state while navigating between pages
    // assigned in generate function
  const workout = useState<Exercise[] | null>("workout", () => null);
  const selectedCategories = useState<number[]>("selectedCategories", () => []);
  return { workout, selectedCategories };
}
