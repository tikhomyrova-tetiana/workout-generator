<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { data, error, status } = await useExercise(route.params.id as string)

const exercise = computed(() => data.value)

function goHome() {
  router.push('/')
}
</script>

<template>
    <div>
        <h1 class="text-2xl font-bold">Exercise {{ exercise?.translations[0]?.name }}</h1>
        <p class="text-lg text-green-300">{{ exercise?.category?.name }}</p>
        <p>{{ exercise?.equipment[0]?.name }}</p>
        <img v-if="exercise?.images[0]?.image" :src="exercise?.images[0]?.image" alt="Exercise Image" style="width:300px">
        <button @click="goHome" class="btn-primary">Go Home</button>
    </div>
</template>