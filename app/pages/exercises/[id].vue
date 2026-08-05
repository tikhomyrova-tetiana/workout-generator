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
    <div class="card space-y-4">
        <h1 class="text-3xl font-bold text-brand">{{ exercise?.translations[0]?.name }}</h1>
        <span class="badge">{{ exercise?.category?.name }}</span>
        <p class="text-gray-600">{{ exercise?.equipment[0]?.name }}</p>
        <img
            v-if="exercise?.images[0]?.image"
            :src="exercise?.images[0]?.image"
            alt="Exercise Image"
            class="w-72 rounded-xl border border-gray-200 shadow-sm"
        >
        <div>
            <button @click="goHome" class="btn-primary">Go Home</button>
        </div>
    </div>
</template>