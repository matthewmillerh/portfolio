<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <main>
    <div class="w-full flex justify-evenly">
      <div
        class="w-1/2 h-96 mr-6 p-6 flex justify-center flex-col items-center border-b-4 rounded-md border-gray-500 shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
      >
        <img :src="'/img/matthewmiller.JPEG'" alt="" class="h-72 rounded-md shadow-md" />
        <p
          class="p-2 flex items-center text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out"
        >
          <font-awesome-icon
            icon="fa-location-dot"
            size="lg"
            class="mr-2 text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out"
          />
          <a href="https://maps.app.goo.gl/R6XXiDs4XcSgxh54A" class="hover:underline"
            >Lake Bled, Slovenia</a
          >
        </p>
      </div>
      <div
        class="p-6 w-1/2 ml-6 text-gray-600 dark:text-gray-300 flex justify-center flex-col border-t-4 border-r-4 border-gray-500 shadow-md rounded-md"
      >
        <h1 class="text-4xl">Hi, I'm Matt</h1>
        <p class="text-xl mt-2">
          I create streamlined web solutions by simplifying the complex. I appreciate the beauty of
          minimalism but also thrive when diving into the chaos and intricacies of challenging
          projects.
        </p>
      </div>
    </div>
  </main>
</template>
