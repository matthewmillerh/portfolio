<script setup>
import { RouterView } from 'vue-router'
import { ref, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MainMenu from './components/MainMenu.vue'

const darkMode = ref(false)
const menuOpen = ref(false)

watch(darkMode, () => {
  const html = document.documentElement.classList
  if (darkMode.value) {
    html.add('dark')
  } else {
    html.remove('dark')
  }
})

watch(menuOpen, () => {})
</script>

<template>
  <header>
    <nav
      class="w-3/4 fixed flex justify-start items-center px-4 py-2 top-4 left-1/2 -translate-x-1/2 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out drop-shadow-md"
    >
      <h1
        class="font-semibold text-2xl dark:text-white text-black transition-colors duration-300 ease-in-out"
      >
        Matthew Miller
      </h1>
      <div class="w-52 flex justify-center items-center scale-[60%]">
        <label class="p-2 dark:text-white text-black font-semibold">Light</label>
        <input
          type="checkbox"
          class="absolute w-20 h-10 peer appearance-none rounded-md cursor-pointer"
          v-model="darkMode"
        />
        <span
          class="w-16 h-10 flex items-center flex-shrink-0 ml-1 mr-1 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 pointer-events-none"
        ></span>
        <label class="p-2 dark:text-white text-black font-semibold">Dark</label>
      </div>
      <div class="inline-block transition-colors">
        <font-awesome-icon
          icon="fa-brands fa-linkedin"
          size="2xl"
          class="p-1 text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out"
        />
        <font-awesome-icon
          icon="fa-brands fa-square-github"
          size="2xl"
          class="p-1 text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out"
        />
      </div>
      <div class="flex items-center relative ml-auto h-10 w-8">
        <Transition>
          <font-awesome-icon
            icon="fa-bars"
            size="2xl"
            class="p-1 absolute text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
            @click="menuOpen = !menuOpen"
            v-if="!menuOpen"
          />
        </Transition>
        <Transition>
          <font-awesome-icon
            icon="fa-xmark"
            size="2xl"
            class="p-1 text-gray-600 dark:text-gray-300 ml-auto transition-all duration-300 ease-in-out cursor-pointer"
            @click="menuOpen = !menuOpen"
            v-if="menuOpen"
          />
        </Transition>
      </div>
    </nav>
  </header>

  <RouterView />
  <Transition name="menu">
    <MainMenu v-if="menuOpen"></MainMenu>
  </Transition>
</template>

<style scoped>
/* Transitions for menu icons */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Transitions for opening and closing the menu */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease-in-out;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(300px);
  opacity: 0;
}
</style>
