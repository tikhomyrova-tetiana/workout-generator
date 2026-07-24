<script setup>
const { data: exercises } = await useFetch('https://wger.de/api/v2/exerciseinfo/?limit=100');
console.log(exercises.value.results);
</script>

<template>
  <div>
    <h1>Exercises</h1>
    <div v-for="exercise in exercises?.results" :key="exercise.uuid">
      <p>{{ exercise.uuid }}</p>
      <p v-for="item in exercise.equipment" :key="item.id">{{ item.name }}</p>
      <p>{{ exercise.translations[0]?.name }}</p>
    </div>
  </div>
</template>
