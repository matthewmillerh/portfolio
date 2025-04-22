<script setup>
defineProps({
  imageName: String,
  liveLink: String,
})
</script>
<template>
  <div
    class="flex h-96 w-full flex-col items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 p-6 shadow-md transition-colors duration-300 ease-in-out md:w-1/2 dark:bg-gradient-to-br dark:from-neutral-700/75 dark:to-neutral-800/75"
  >
    <a :href="liveLink" target="_blank">
      <h1 class="text-center font-semibold">
        <span><slot name="project-title"></slot></span>
        <span class="ml-2">
          <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
        </span>
      </h1>
      <img :src="'/img/' + imageName" alt="" class="mt-2 max-h-72 rounded-md shadow-md" />
    </a>
  </div>
</template>
