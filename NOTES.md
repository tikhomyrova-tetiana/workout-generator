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
- added vitest, test for `filterExercises`

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

