import { describe, it, expect } from "vitest";
import { filterExercises } from "./filterExercises";
import type { Exercise } from "~/types/exercise";

function createExercise(overrides: Partial<Exercise> = {}): Exercise {
  return {
    id: 1,
    images: [{ id: 1, image: "pic.png" }],
    uuid: "1",
    equipment: [],
    translations: [],
    category: { id: 1, name: "Category 1" },
    muscles: [],
    muscles_secondary: [],
    ...overrides,
  };
}

describe("filterExercises", () => {
  (it("should filter out exercises without images", () => {
    const exerciseImage = createExercise({
      images: [{ image: "https://example.com/image.jpg", id: 1 }],
    });
    const exerciseNoImage = createExercise({ images: [] });

    const filteredExercises = filterExercises(
      [exerciseImage, exerciseNoImage],
      { categories: [] },
    );
    expect(filteredExercises).toEqual([exerciseImage]);
  }),
    it("should filter out exercises by category", () => {
      const exerciseLegs = createExercise({
        category: { id: 1, name: "Legs" },
      });
      const exerciseArms = createExercise({
        category: { id: 2, name: "Arms" },
      });

      const filteredExercises = filterExercises([exerciseLegs, exerciseArms], {
        categories: [1],
      });
      expect(filteredExercises).toEqual([exerciseLegs]);
    }));

  it("should keep all exercises with images if no categories are selected", () => {
    const exercise1 = createExercise({
      id: 1,
      category: { id: 1, name: "Arms" },
    });
    const exercise2 = createExercise({
      id: 2,
      category: { id: 2, name: "Legs" },
    });
    const filteredExercises = filterExercises([exercise1, exercise2], {
      categories: [],
    });
    expect(filteredExercises).toEqual([exercise1, exercise2]);
  });

  it("should filter out exercises matching the category but with no images", () => {
    const exerciseNoImage = createExercise({
      images: [],
      category: { id: 2, name: "Legs" },
    });
    const filteredExercises = filterExercises([exerciseNoImage], {
      categories: [2],
    });
    expect(filteredExercises).toEqual([]);
  });

  it("should return empty array if no exercises are provided", () => {
    const filteredExercises = filterExercises([], { categories: [1] });
    expect(filteredExercises).toEqual([]);
  });
});
