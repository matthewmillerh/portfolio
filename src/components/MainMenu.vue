<script setup>
import { ref } from 'vue'

const menuItems = ref(['Home', 'About', 'Projects', 'Contact', 'CV'])
</script>
<template>
  <div
    class="fixed bottom-0 left-1/2 z-60 flex h-4/5 w-full -translate-x-1/2 flex-col items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-200 shadow-md md:bottom-4 md:w-3/4 xl:w-1/2 dark:bg-gradient-to-br dark:from-neutral-600 dark:to-neutral-700"
  >
    <div
      class="flex flex-col items-center justify-center text-2xl text-neutral-600 dark:text-neutral-300"
    >
      <!-- loop through each menu item and add increasing delay to the transition to create staggered display effect -->
      <transition-group name="menu-items" appear>
        <p
          v-for="(menuItem, index) in menuItems"
          :key="index"
          class="py-2"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <router-link :to="'/' + (menuItem !== 'Home' ? menuItem : '')">
            {{ menuItem }}
          </router-link>
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
