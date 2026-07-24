<script setup lang="ts">
import type { Exercise } from '~/types/exercise';
// useFetch = runs on page load
// $fetch = runs when you call it (an action)
const { data: exercises } = useExercises();
const { data: categories } = useCategories();
const withImages = computed(() => exercises?.value?.results.filter((ex) => ex.images.length > 0))
console.log(exercises?.value?.results);

const workout = ref<Exercise[]>([])
const selectedCategories = ref<number[]>([])

function filterExercises(exercises: Exercise[], filters: { categories: number[] }) {
  return exercises.filter(ex => {
    if ( ex.images.length === 0) return false
    if (filters.categories.length > 0 && !filters.categories.includes(ex.category.id)) return false
    return true
  })
}

async function generate() {
    const res = await $fetch<ExercisesResponse>('https://wger.de/api/v2/exerciseinfo/?limit=200')
workout.value = filterExercises(res.results, { categories: selectedCategories.value })
}
</script>

<template>
  <div>
    <h1>Exercises</h1>
    <div>
        <p>Choose the exercises you want to see by category:
            <label v-for="category in categories?.results" :key="category?.id">
            <input type="checkbox" :value="category?.id" v-model="selectedCategories" />
            {{ category?.name }}
        </label>
        </p>
    </div>
    <button @click="generate">Generate workout</button>
    
    <div v-if="workout.length > 0" v-for="exercise in workout" :key="exercise.uuid">
        <ExerciseCard :exercise="exercise" />
    </div>
    
  </div>
</template>
