<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <!-- <AppHeader /> -->
        <header class="border-b border-gray-200 bg-white/70 backdrop-blur">
            <div class="mx-auto flex max-w-3xl items-center px-6 py-4">
                <NuxtLink to="/" class="text-xl font-extrabold tracking-tight text-brand">
                    Workout Generator
                </NuxtLink>
            </div>
        </header>

        <main class="mx-auto max-w-3xl px-6 py-10">
            <slot /> <!-- children components -->
        </main>
        <!-- <AppFooter /> -->
    </div>
</template>
