<script setup>
defineProps({
  imageName: String,
  liveLink: String,
})
</script>
<template>
  <div
    class="w-full md:w-1/2 h-96 p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
  >
    <a :href="liveLink" target="_blank">
      <h1 class="font-semibold text-center">
        <span><slot name="project-title"></slot></span>
        <span class="ml-2">
          <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
        </span>
      </h1>
      <img :src="'/img/' + imageName" alt="" class="mt-2 max-h-72 rounded-md shadow-md" />
    </a>
  </div>
</template>
