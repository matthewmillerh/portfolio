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
    class="flex min-h-[650px] w-full flex-col items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 p-6 shadow-md transition-colors duration-300 ease-in-out md:w-4/5 dark:bg-gradient-to-br dark:from-neutral-700/75 dark:to-neutral-800/75"
  >
    <!-- project title and image (link to live site) -->
    <a :href="liveLink" target="_blank" class="text-center">
      <h1 class="font-semibold">
        <span><slot name="project-title"></slot></span>
        <span class="ml-2">
          <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
        </span>
      </h1>
      <p class="text-sm italic"><slot name="date"></slot></p>
      <img :src="'/img/' + imageName" alt="" class="mt-2 max-h-96 rounded-md shadow-md" />
    </a>
    <!-- project description -->
    <p
      class="mt-4 w-full rounded-lg bg-neutral-200/70 px-2 py-1 text-justify shadow-md transition-colors duration-300 ease-in-out md:w-4/5 dark:bg-neutral-700/70"
    >
      <slot name="description"></slot>
    </p>

    <!-- tech stack component fetches data from github api to display the stack used for the project -->
    <TechStack :repo-prop="repoName" />

    <!-- Button links to the project -->
    <div class="mt-4 flex flex-col justify-center gap-2 md:flex-row">
      <a
        v-if="!(repoName == 'thephotographersgallery')"
        :href="liveLink"
        target="_blank"
        class="inline-flex cursor-pointer items-center justify-center rounded-md bg-neutral-300 px-4 py-2 shadow-md transition-colors duration-300 ease-in-out hover:bg-neutral-300/50 dark:bg-slate-600 dark:hover:bg-neutral-600/50"
      >
        <span class="mr-2 font-semibold">Visit Live Site</span>
        <span><font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" /></span>
      </a>
      <a
        :href="'https://github.com/matthewmillerh/' + repoName"
        target="_blank"
        class="inline-flex cursor-pointer items-center justify-center rounded-md bg-neutral-300 px-4 py-2 shadow-md transition-colors duration-300 ease-in-out hover:bg-neutral-300/50 dark:bg-slate-600 dark:hover:bg-neutral-600/50"
      >
        <span class="mr-2 font-semibold">View Github Repo</span>
        <span><font-awesome-icon icon="fa-brands fa-github" size="xl" /></span>
      </a>
    </div>
  </div>
</template>
