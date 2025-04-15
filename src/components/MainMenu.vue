<script setup>
import { ref } from 'vue'

const menuItems = ref(['Home', 'About', 'Projects', 'Contact', 'CV'])
</script>
<template>
  <div
    class="h-4/5 w-full md:w-1/2 fixed bottom-0 md:bottom-4 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 left-1/2 -translate-x-1/2 shadow-md flex flex-col items-center justify-center z-60"
  >
    <div
      class="text-2xl text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center"
    >
      <transition-group name="menu-items" appear>
        <p
          v-for="(menuItem, index) in menuItems"
          :key="index"
          class="py-2"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- <router-link :to="'/' + (menuItem !== 'Home' ? menuItem : '')">
            {{ menuItem }}
          </router-link> -->
          {{ menuItem }}
        </p>
      </transition-group>
    </div>
  </div>
</template>
<style>
/* Transitions for menu items staggering into view */
.menu-items-enter-active,
.menu-items-leave-active {
  transition: all 0.3s ease-in-out;
}
.menu-items-enter-from,
.menu-items-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
