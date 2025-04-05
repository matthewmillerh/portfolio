import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Font Awesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import the Vue component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import specific icons you want to use
import { faUser, faBars, faXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGithubSquare,
  faLinkedin,
  faVuejs,
  faBootstrap,
  faPhp,
  faJs,
  faCss,
  faHtml5,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faUser,
  faGithub,
  faGithubSquare,
  faBars,
  faXmark,
  faLinkedin,
  faLocationDot,
  faVuejs,
  faBootstrap,
  faPhp,
  faJs,
  faCss,
  faHtml5,
  faGitAlt,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Register the fontawesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
