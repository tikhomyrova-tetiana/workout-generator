<script setup lang="ts">
import type { Exercise } from '~/types/exercise';

const props = defineProps<{
    exercise: Exercise;
}>()
</script>
<template>
    <div>
        <p>{{ exercise.uuid }}</p>
        <p v-for="item in exercise.equipment" :key="item.id">{{ item.name }}</p>
        <NuxtLink :to="`/exercises/${exercise.uuid}`">{{ exercise.translations[0]?.name }}</NuxtLink>
    </div>
</template>