<script setup>
import { RouterView } from 'vue-router'
import { ref, watch } from 'vue'

const darkMode = ref(false)

watch(darkMode, () => {
  const html = document.documentElement.classList
  if (darkMode.value) {
    html.add('dark')
  } else {
    html.remove('dark')
  }
})
</script>

<template>
  <header>
    <nav class="flex justify-center items-center mt-2">
      <h1
        class="font-semibold dark:text-white text-black transition-colors duration-500 ease-in-out"
      >
        Matthew Miller
      </h1>
      <div class="w-52 flex justify-center items-center scale-[60%]">
        <label class="p-2 dark:text-white text-black font-semibold"> Light </label>
        <input
          type="checkbox"
          class="absolute w-20 h-10 peer appearance-none rounded-md hover:cursor-pointer"
          v-model="darkMode"
        />
        <span
          class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 pointer-events-none"
        ></span>
        <label class="p-2 dark:text-white text-black font-semibold">Dark</label>
      </div>
      <div class="inline-block">
        <font-awesome-icon icon="user" size="xl" />
        <font-awesome-icon icon="fa-brands fa-github" size="xl" />
        <font-awesome-icon icon="fa-brands fa-square-github" size="xl" />
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
