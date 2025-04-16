<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import TechStack from '@/components/TechStack.vue'
</script>
<template>
  <main>
    <div class="w-full flex flex-col items-center gap-8">
      <!-- Artist portfolio website -->
      <div
        class="w-full md:w-4/5 min-h-[650px] p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
      >
        <a href="https://www.pentique.co.za" target="_blank" class="text-center">
          <h1 class="font-semibold">
            Artist Portfolio Website
            <span class="ml-2">
              <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
            </span>
          </h1>
          <p class="italic text-sm">2024 - present</p>
          <img
            :src="'/img/project_rae_smith.png'"
            alt=""
            class="mt-2 max-h-96 rounded-md shadow-md"
          />
        </a>
        <p class="mt-4 w-full md:w-4/5 text-justify">
          This project is an ongoing effort to create a dedicated online portfolio for South African
          artist Emily Rae Smith Labuschagne. The final website will provide an efficient and
          professional platform to showcase her artistic works.
        </p>
        <TechStack repo-prop="raesmith" />
      </div>

      <!-- Online Store for small business -->
      <div
        class="w-full md:w-4/5 min-h-[650px] p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
      >
        <a href="https://www.pentique.co.za" target="_blank" class="text-center">
          <h1 class="font-semibold">
            Online Store for Small Business
            <span class="ml-2">
              <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
            </span>
          </h1>
          <p class="italic text-sm">2024 - present</p>
          <img :src="'/img/project_pentique.png'" alt="" class="mt-2 max-h-96 rounded-md" />
        </a>
        <p class="mt-4 w-full md:w-4/5 text-justify">
          Originally developed in PHP with a custom content management system, this website is
          undergoing a complete rewrite using a modern tech stack. The project is transitioning to a
          Vue.js frontend and an Express.js backend to enhance performance, security, and
          maintainability, addressing previous vulnerabilities identified in the initial
          implementation.
        </p>
        <TechStack repo-prop="pentique" />
      </div>

      <!-- Travel Itinerary Website -->
      <div
        class="w-full md:w-4/5 min-h-[650px] p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
      >
        <a href="https://matthewmillerh-itinerary.netlify.app/" target="_blank" class="text-center">
          <h1 class="font-semibold">
            Travel Itinerary Website
            <span class="ml-2">
              <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
            </span>
          </h1>
          <p class="italic text-sm">2024</p>
          <img
            :src="'/img/project_itinerary.png'"
            alt=""
            class="mt-2 max-h-96 rounded-md shadow-md"
        /></a>
        <p class="mt-4 w-full md:w-4/5 text-justify">Description</p>
        <TechStack repo-prop="itinerary" />
      </div>

      <!-- The Photographers Gallery ZA -->
      <div
        class="w-full md:w-4/5 min-h-[650px] p-6 flex justify-center flex-col items-center rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
      >
        <a
          href="https://github.com/matthewmillerh/thephotographersgallery"
          target="_blank"
          class="text-center"
        >
          <h1 class="font-semibold">
            Photo Gallery Website for Cape Town Art Gallery
            <span class="ml-2">
              <font-awesome-icon icon="fa-arrow-up-right-from-square" size="sm" />
            </span>
          </h1>
          <p class="italic text-sm">2015 (offline)</p>
          <img
            :src="'/img/project_photographersgalleryza.png'"
            alt=""
            class="mt-2 max-h-96 rounded-md shadow-md"
        /></a>
        <p class="mt-4 w-full md:w-4/5 text-justify">Description</p>
        <TechStack repo-prop="thephotographersgallery" />
      </div>
    </div>
  </main>
</template>
<style scoped></style>
