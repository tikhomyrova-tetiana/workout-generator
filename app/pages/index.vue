<script setup lang="ts">
const { data: exercises } = useExercises();
console.log(exercises?.value?.results);
</script>

<template>
  <div>
    <h1>Exercises</h1>
    <div v-for="exercise in exercises?.results" :key="exercise.uuid">
        <ExerciseCard :exercise="exercise" />
    </div>
  </div>
</template>
