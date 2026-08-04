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
  <div>
    <h1 class="text-2xl font-bold">Exercises</h1>
    <div>
        <p>Choose the exercises you want to see by category:
            <label v-for="category in categories?.results" :key="category?.id">
            <input type="checkbox" :value="category?.id" v-model="selectedCategories" />
            <span class="text-black">{{ category?.name }}</span>
        </label>
        </p>
    </div>
    <button @click="generate" class="btn-primary" :disabled="isLoading">Generate workout</button>
    <button @click="reset" class="btn-primary">Reset</button>
    
    <p v-if="error">Something went wrong</p>
    <p v-else-if="status === 'pending'">Loading...</p>
    <p v-else-if="workout === null">No exercises yet — hit Generate.</p>
    <p v-else-if="status === 'success' && workout?.length === 0">No exercises match those filters</p>
    <ExerciseCard v-for="exercise in workout ?? []" :key="exercise.uuid" :exercise="exercise" />
    <!-- <template v-if="workout.length > 0"> - <template> wrapper — groups elements but renders no extra DOM node
    <ExerciseCard v-for="exercise in workout" :key="exercise.uuid" :exercise="exercise" />
    </template> -->
    
  </div>
</template>
