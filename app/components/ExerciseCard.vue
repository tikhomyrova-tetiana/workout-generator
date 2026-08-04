<script setup lang="ts">
import type { Exercise } from '~/types/exercise';

const props = defineProps<{
    exercise: Exercise;
}>()
</script>
<template>
    <div>
        <p>{{ exercise.uuid }}</p>
        <p v-for="item in exercise.equipment" :key="item.id" class="text-gray-500">Equipment: {{ item.name }}</p>
        <NuxtLink :to="`/exercises/${exercise.id}`" class="link">{{ exercise.translations[0]?.name }}</NuxtLink>
    </div>
</template>