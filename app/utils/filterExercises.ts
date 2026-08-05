import type { Exercise } from "~/types/exercise"

export function filterExercises(exercises: Exercise[], filters: { categories: number[] }) {
    return exercises.filter(ex => {
      if (ex.images.length === 0) return false
      if (filters.categories.length > 0 && !filters.categories.includes(ex.category.id)) return false
      return true
    })
  }