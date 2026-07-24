<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const { data: exercise } = useExercise(route.params.id as string)

function goHome() {
  router.push('/')
}
</script>

<template>
    <div>
        <h1>Exercise {{ exercise?.translations[0]?.name }}</h1>
        <p>{{ exercise?.category?.name }}</p>
        <p>{{ exercise?.equipment[0]?.name }}</p>
        <img v-if="exercise?.images[0]?.image" :src="exercise?.images[0]?.image" alt="Exercise Image" style="width:300px">
        <button @click="goHome">Go Home</button>
    </div>
</template>