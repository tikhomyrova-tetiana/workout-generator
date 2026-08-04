import type { Exercise } from "~/types/exercise";

export function useWorkout() {
    // to save the state while navigating between pages
    // assigned in generate function
  const workout = useState<Exercise[]>("workout", () => []);
  const selectedCategories = useState<number[]>("selectedCategories", () => []);
  return { workout, selectedCategories };
}
