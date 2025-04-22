<script setup>
import { RouterView, useRouter } from 'vue-router'
import { onMounted, ref, watch } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import MainMenu from './components/MainMenu.vue'

const router = useRouter()
const darkMode = ref(true)
const menuOpen = ref(false)
const themeStorageKey = 'portfolioThemeKey'

// Set the theme when darkMode toggle changes
watch(darkMode, (newDarkModeValue) => {
  setTheme(newDarkModeValue)
})

onMounted(() => {
  // load the theme preference currently stored in localstorage
  const storedTheme = localStorage.getItem(themeStorageKey)
  if (storedTheme === 'true') {
    darkMode.value = true
  } else if (storedTheme === 'false') {
    darkMode.value = false
  } else {
    // Default theme if none stored in localstorage (dark)
    darkMode.value = true
  }
  setTheme(darkMode.value)
})

// set dark or light mode and store preference in localstorage
function setTheme(isDarkMode) {
  const html = document.documentElement.classList
  if (isDarkMode) {
    html.add('dark')
  } else {
    html.remove('dark')
  }
  localStorage.setItem(themeStorageKey, isDarkMode)
}
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

// close the menu when router view state is updated
watch(
  () => router.currentRoute.value,
  () => {
    menuOpen.value = false
  },
)
</script>

<template>
  <header>
    <!-- Backdrop behind main nav bar to create a blur effect on content scrolling past -->
    <div class="fixed inset-x-0 top-0 z-40 min-h-24">
      <div
        class="absolute inset-0 bg-white/50 backdrop-blur-2xl transition-colors duration-500 ease-in-out dark:bg-neutral-800/80"
        style="mask-image: linear-gradient(to bottom, black, black 80%, transparent)"
      ></div>
    </div>

    <!-- Main nav menu -->
    <nav
      class="fixed top-4 left-1/2 z-60 flex w-[95%] -translate-x-1/2 flex-col items-start gap-2 rounded-md bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 py-2 shadow-md transition-colors duration-300 ease-in-out lg:w-4/5 lg:flex-row lg:items-center lg:justify-start lg:gap-8 dark:bg-gradient-to-br dark:from-neutral-600 dark:to-neutral-800"
    >
      <h1
        class="text-2xl font-semibold text-black transition-colors duration-300 ease-in-out dark:text-white"
      >
        <router-link to="/">Matthew Miller</router-link>
      </h1>

      <!-- wrapper for theme toggle and link icons -->
      <div class="inline-flex items-center justify-center gap-4">
        <div class="relative flex items-center justify-start">
          <label class="mr-2 py-2 text-sm text-black dark:text-white">Light</label>
          <input
            type="checkbox"
            class="peer absolute h-10 w-full cursor-pointer appearance-none rounded-md"
            v-model="darkMode"
          />
          <span
            class="pointer-events-none mr-1 ml-1 flex h-5 w-8 flex-shrink-0 items-center rounded-full bg-neutral-300 p-0.5 duration-300 ease-in-out peer-checked:bg-neutral-500 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-md after:duration-300 peer-checked:after:translate-x-3"
          ></span>
          <label class="ml-2 py-2 text-sm text-black dark:text-white">Dark</label>
        </div>
        <a href="https://www.linkedin.com/in/matthew-miller-919bb7312/" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-linkedin"
            size="2xl"
            class="p-1 text-neutral-600 transition-colors duration-300 ease-in-out dark:text-neutral-300"
          />
        </a>
        <a href="https://github.com/matthewmillerh" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-square-github"
            size="2xl"
            class="p-1 text-neutral-600 transition-colors duration-300 ease-in-out dark:text-neutral-300"
          />
        </a>
      </div>

      <!-- Menu open and close icons -->
      <div class="absolute right-2 flex h-10 w-10 items-center">
        <Transition>
          <font-awesome-icon
            icon="fa-bars"
            size="2xl"
            class="absolute cursor-pointer p-1 text-neutral-600 transition-all duration-300 ease-in-out dark:text-neutral-300"
            @click="toggleMenu"
            v-if="!menuOpen"
          />
        </Transition>
        <Transition>
          <font-awesome-icon
            icon="fa-xmark"
            size="2xl"
            class="cursor-pointer p-1 text-neutral-600 transition-all duration-300 ease-in-out dark:text-neutral-300"
            @click="toggleMenu"
            v-if="menuOpen"
          />
        </Transition>
      </div>
    </nav>
  </header>

  <!-- Main RouterView content -->
  <div class="z-10 mt-40">
    <RouterView />
  </div>

  <!-- Main menu component -->
  <Transition name="menu">
    <MainMenu v-if="menuOpen"></MainMenu>
  </Transition>

  <!-- Background blur when main menu is open -->
  <Transition>
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-50 bg-black/30 backdrop-blur-2xl"
      @click="toggleMenu"
    ></div>
  </Transition>
</template>

<style scoped>
/* Transitions for menu icons and main menu background blur */
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
  transition: all 0.3s ease-in-out;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(300px);
  opacity: 0;
}
</style>
