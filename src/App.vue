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

// set dark or light mode
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
// prevents scrolling when the menu is open
watch(menuOpen, () => {
  const html = document.documentElement.classList
  if (menuOpen.value) {
    // html.add('overflow-hidden')
  } else {
    // html.remove('overflow-hidden')
  }
})
</script>

<template>
  <header>
    <div class="fixed inset-x-0 top-0 z-40 min-h-24">
      <div
        class="absolute inset-0 backdrop-blur-2xl dark:bg-gray-800/80 bg-white/50 transition-colors duration-500 ease-in-out"
        style="mask-image: linear-gradient(to bottom, black, black 80%, transparent)"
      ></div>
    </div>
    <nav
      class="w-[95%] md:w-4/5 fixed flex flex-col gap-2 md:gap-8 md:flex-row md:justify-start items-start md:items-center px-4 py-2 top-4 left-1/2 -translate-x-1/2 rounded-md bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out shadow-md z-60"
    >
      <h1
        class="font-semibold text-2xl dark:text-white text-black transition-colors duration-300 ease-in-out"
      >
        <router-link to="/">Matthew Miller</router-link>
      </h1>

      <div class="inline-flex items-center justify-center gap-2">
        <div class="flex justify-start items-center relative">
          <label class="py-2 mr-2 dark:text-white text-black text-sm">Light</label>
          <input
            type="checkbox"
            class="absolute w-full h-10 peer appearance-none rounded-md cursor-pointer"
            v-model="darkMode"
          />
          <span
            class="w-8 h-5 flex items-center flex-shrink-0 ml-1 mr-1 p-0.5 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-gray-500 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-3 pointer-events-none"
          ></span>
          <label class="py-2 ml-2 dark:text-white text-black text-sm">Dark</label>
        </div>
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
      <div class="flex items-center absolute right-2 h-10 w-10">
        <Transition>
          <font-awesome-icon
            icon="fa-bars"
            size="2xl"
            class="p-1 absolute text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
            @click="toggleMenu"
            v-if="!menuOpen"
          />
        </Transition>
        <Transition>
          <font-awesome-icon
            icon="fa-xmark"
            size="2xl"
            class="p-1 text-gray-600 dark:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
            @click="toggleMenu"
            v-if="menuOpen"
          />
        </Transition>
      </div>
    </nav>
  </header>

  <div class="mt-40 z-10">
    <RouterView />
  </div>

  <Transition name="menu">
    <MainMenu v-if="menuOpen"></MainMenu>
  </Transition>
  <Transition
    ><div
      v-if="menuOpen"
      class="z-50 fixed inset-0 backdrop-blur-2xl bg-black/30"
      @click="toggleMenu"
    ></div
  ></Transition>
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
  transition: all 0.3s ease-in-out;
}
.menu-enter-from,
.menu-leave-to {
  transform: translateY(300px);
  opacity: 0;
}
</style>
