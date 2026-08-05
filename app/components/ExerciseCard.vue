<script setup lang="ts">
import type { Exercise } from '~/types/exercise';

const props = defineProps<{
    exercise: Exercise;
}>()
</script>
<template>
    <div class="card flex h-full flex-col gap-2">
        <NuxtLink :to="`/exercises/${exercise.id}`" class="text-lg font-semibold text-brand hover:text-brand-dark transition-colors">
            {{ exercise.translations[0]?.name }}
        </NuxtLink>
        <p v-for="item in exercise.equipment" :key="item.id" class="text-sm text-gray-500">Equipment: {{ item.name }}</p>
    </div>
</template>