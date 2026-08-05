import { describe, it, expect } from "vitest";
import { filterExercises } from "./filterExercises";

describe('filterExercises', () => {
  it('should filter out exercises without images', () => {
    const exercises = [
      { id: 1, images: [], uuid: '1', equipment: [], translations: [], category: { id: 1, name: 'Category 1' }, muscles: [], muscles_secondary: [] },
      { id: 2, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '2', equipment: [], translations: [], category: { id: 2, name: 'Category 2' }, muscles: [], muscles_secondary: [] },
    ]
    const filteredExercises = filterExercises(exercises, { categories: [] })
    expect(filteredExercises).toEqual([{ id: 2, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '2', equipment: [], translations: [], category: { id: 2, name: 'Category 2' }, muscles: [], muscles_secondary: [] }])
  }),

  it('should filter out exercises by category', () => {
    const exercises = [
      { id: 1, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '1', equipment: [], translations: [], category: { id: 1, name: 'Category 1' }, muscles: [], muscles_secondary: [] },
      { id: 2, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '2', equipment: [], translations: [], category: { id: 2, name: 'Category 2' }, muscles: [], muscles_secondary: [] },
    ]
    const filteredExercises = filterExercises(exercises, { categories: [1] })
    expect(filteredExercises).toEqual([{ id: 1, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '1', equipment: [], translations: [], category: { id: 1, name: 'Category 1' }, muscles: [], muscles_secondary: [] }])
  })

  it('should keep all exercises with images if no categories are selected', () => {
    const exercises = [
        { id: 1, images: [], uuid: '1', equipment: [], translations: [], category: { id: 1, name: 'Category 1' }, muscles: [], muscles_secondary: [] },
        { id: 2, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '2', equipment: [], translations: [], category: { id: 2, name: 'Category 2' }, muscles: [], muscles_secondary: [] },
      ]
      const filteredExercises = filterExercises(exercises, { categories: [] })
      expect(filteredExercises).toEqual([{ id: 2, images: [{ image: 'https://example.com/image.jpg', id: 1 }], uuid: '2', equipment: [], translations: [], category: { id: 2, name: 'Category 2' }, muscles: [], muscles_secondary: [] }])
  })

  it('should return empty array if no exercises are provided', () => {
    const filteredExercises = filterExercises([], { categories: [] })
    expect(filteredExercises).toEqual([])
  })
})
