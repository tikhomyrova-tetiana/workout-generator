<script setup lang="ts">
const route = useRoute()
const router = useRouter()

function goHome() {
  router.push('/')
}
const id = route.params.id

console.log(route.params.id)
</script>

<template>
    <div>
        <h1>Exercise {{ id }}</h1>
        <button @click="goHome">Go Home</button>
    </div>
</template>