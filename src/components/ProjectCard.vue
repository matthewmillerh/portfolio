<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TechStack from '@/components/TechStack.vue'

defineProps({
  imageName: String,
  repoName: String,
  liveLink: String,
})
</script>
<template>
  <div
    class="w-full md:w-4/5 min-h-[650px] p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-neutral-100 to-neutral-50 dark:bg-gradient-to-br dark:from-neutral-700/75 dark:to-neutral-800/75 transition-colors duration-300 ease-in-out"
  >
    <a :href="liveLink" target="_blank" class="text-center">
      <h1 class="font-semibold">
        <span><slot name="project-title"></slot></span>
        <span class="ml-2">
          <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
        </span>
      </h1>
      <p class="italic text-sm"><slot name="date"></slot></p>
      <img :src="'/img/' + imageName" alt="" class="mt-2 max-h-96 rounded-md shadow-md" />
    </a>
    <p
      class="mt-4 py-1 px-2 w-full md:w-4/5 text-justify bg-neutral-200/70 dark:bg-neutral-700/70 rounded-lg shadow-md transition-colors duration-300 ease-in-out"
    >
      <slot name="description"></slot>
    </p>
    <TechStack :repo-prop="repoName" />

    <!-- Button links to the project -->
    <div class="mt-4 flex justify-center gap-2 flex-col md:flex-row">
      <a
        v-if="!(repoName == 'thephotographersgallery')"
        :href="liveLink"
        target="_blank"
        class="inline-flex items-center justify-center px-4 py-2 bg-neutral-300 dark:bg-slate-600 rounded-md shadow-md cursor-pointer hover:bg-neutral-300/50 dark:hover:bg-neutral-600/50 transition-colors duration-300 ease-in-out"
      >
        <span class="mr-2 font-semibold">Visit Live Site</span>
        <span><font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" /></span>
      </a>
      <a
        :href="'https://github.com/matthewmillerh/' + repoName"
        target="_blank"
        class="inline-flex items-center justify-center px-4 py-2 bg-neutral-300 dark:bg-slate-600 rounded-md shadow-md cursor-pointer hover:bg-neutral-300/50 dark:hover:bg-neutral-600/50 transition-colors duration-300 ease-in-out"
      >
        <span class="mr-2 font-semibold">View Github Repo</span>
        <span><font-awesome-icon icon="fa-brands fa-github" size="xl" /></span>
      </a>
    </div>
  </div>
</template>
