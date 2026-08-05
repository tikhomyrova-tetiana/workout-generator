<script setup lang="ts">
import { filterExercises } from '~/utils/filterExercises';
// useFetch = runs on page load
// $fetch = runs when you call it (an action)
const { data: exercises, error, status } = useExercises();
const { data: categories, error: categoriesError, status: categoriesStatus } = useCategories();
const { workout, selectedCategories } = useWorkout();
const withImages = computed(() => exercises?.value?.results.filter((ex) => ex.images.length > 0))
const isLoading = computed(() => status.value === 'pending');

function reset() {
  workout.value = null
  selectedCategories.value = []
}

async function generate() {
workout.value = filterExercises(exercises?.value?.results ?? [], { categories: selectedCategories.value })
}
</script>

<template>
  <div class="space-y-8">
    <div class="space-y-2 text-center">
      <h1 class="text-3xl font-bold text-brand">Exercises</h1>
      <p class="text-gray-500">Pick a few categories and generate your workout.</p>
    </div>

    <div class="card space-y-5">
      <fieldset class="border-0 p-0">
        <legend class="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
        Choose the exercises you want to see by category
        </legend>
      <div class="flex flex-wrap gap-2">
        <label v-for="category in categories?.results" :key="category?.id" class="chip">
          <input type="checkbox" :value="category?.id" v-model="selectedCategories" class="peer chip-input" />
          <span class="chip-label">{{ category?.name }}</span>
        </label>
      </div>
      </fieldset>

      <div class="flex flex-wrap gap-3 pt-1">
        <button @click="generate" class="btn-primary" :disabled="isLoading" :aria-busy="isLoading">Generate workout</button>
        <button @click="reset" class="btn-accent">Reset</button>
      </div>
    </div>

    <div aria-live="polite" aria-atomic="true">
        <p v-if="error" class="state-error" role="alert">Something went wrong</p>
        <p v-else-if="status === 'pending'" class="state-muted">Loading...</p>
        <p v-else-if="workout === null" class="state-muted">No exercises yet — hit Generate.</p>
        <p v-else-if="status === 'success' && workout?.length === 0" class="state-muted">No exercises match those filters</p>
    </div>
    <div class="grid gap-4 sm:grid-cols-2">
      <ExerciseCard v-for="exercise in workout ?? []" :key="exercise.uuid" :exercise="exercise" />
    </div>
  </div>
</template>
