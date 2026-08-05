# Workout Generator — Notes

A small Nuxt (Vue 3) practice app that fetches exercises from the free
[wger API](https://wger.de/api/v2/) and generates a filtered workout.

## Mental model (coming from React)

| Concept | React | Vue / Nuxt here |
| --- | --- | --- |
| Local state you set | `useState` | `ref` |
| Shared/global state | Context / store | `useState('key', …)` (Nuxt, SSR-safe) |
| Derived/cached value | `useMemo` | `computed` |
| Data fetching w/ cache | React Query | `useFetch` / `useAsyncData` |
| One-off request (action) | `fetch` in handler | `$fetch` |
| Reusable logic hook | custom hook | composable (`composables/`) |
| Pure helpers | `utils/` | `utils/` (auto-imported) |

### Key rules of thumb
- **`computed` = derived, not stored.** If you assign to it → use `ref`/`useState`. If it's calculated from other state → `computed`.
- **A composable only runs when called.** Declaring `useExercises()` does nothing; the fetch fires when you call it in `<script setup>`.
- **`useFetch` fetches on load**; pass `{ immediate: false }` + `execute()` to defer to a click. **`$fetch`** fetches only when you call it (use for actions).
- **Don't put `v-if` and `v-for` on the same element.** Use a `<template>` wrapper, or a separate element for the empty state.
- **Attributes go inside the opening tag.** `<p class="...">text</p>`, never `<p>text class="..."</p>` (that renders as literal text).

## Project structure

```
app/
  app.vue                 # root: <NuxtLayout><NuxtPage/></NuxtLayout>
  layouts/default.vue     # shared shell (header/footer slots)
  pages/
    index.vue             # home: filters + generate/reset + results
    exercises/[id].vue    # exercise detail (reads route.params.id)
  components/
    ExerciseCard.vue      # single exercise in the list
    Button.vue            # (unused placeholder)
  composables/
    useExercises.ts       # useExercises / useExercise / useCategories (useFetch)
    useWorkout.ts         # shared workout + selectedCategories (useState)
  types/exercise.ts       # Exercise + response types
  assets/css/main.css     # Tailwind + .btn / .link classes
nuxt.config.ts            # tailwind module
tailwind.config.ts        # custom colors (primary/accent/brand)
```

## Done

- Nuxt routing: `app.vue` → `layouts/default.vue` → pages
- Home page with category filter (checkboxes + `v-model="selectedCategories"`)
- Fetching composables using `useFetch` (exercises, single exercise, categories)
- Shared state via `useWorkout` (`useState`) that survives navigation
- Dynamic detail page reading `route.params.id`
- `Exercise` types + response types
- `ExerciseCard` with `defineProps`
- Tailwind installed/configured with custom colors and `.btn-*` / `.link` classes
- `generate` / `reset` actions writing to shared state

## To do

- [ ] `generate()`: **randomize** and **limit** the result (pick N random from filtered)
- [ ] Filter the already-fetched data instead of re-fetching in `generate()`
      (or use `useFetch(..., { immediate: false })` + `execute()`)
- [ ] Real **loading / error / empty** states (including "no matches")
- [ ] Remove dead code (`withImages`, `console.log`) on the home page
- [ ] Fix `ExerciseCard` bug: `class="text-gray-500"` is inside text, not a real attribute
- [ ] Fix `v-if` + `v-for` on the same element in `index.vue`
- [ ] Move pure helpers (`filterExercises`, future `randomize`) into `app/utils/`
- [ ] Actually apply Tailwind for layout/styling
- [ ] Remove or implement the placeholder `Button.vue`
- [ ] Guard exercise `translations` by language (don't assume `[0]` is English)

## Best practices for an app like this

- Fetch once, **derive with `computed`**; avoid duplicate requests.
- Keep pure logic (filter/randomize) as plain, testable functions in `utils/`.
- Composables in `composables/` for Vue-reactive logic; plain helpers in `utils/`.
- Consider a reusable list component with loading/error/empty handling.
- Pull magic values (API base URL, `limit=200`) into constants or `useRuntimeConfig`.
