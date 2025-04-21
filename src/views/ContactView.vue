<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import NotificationModal from '@/components/NotificationModal.vue'

const form = ref(null)
const inputFieldReset = ref(null)
const showNotification = ref(false)

const closeNotification = () => {
  showNotification.value = false
}

const sendMail = () => {
  emailjs.sendForm('service_qg7afqq', 'template_yrm6lm8', form.value, 'RyIXXr7-ppm95PWre').then(
    () => {
      alert('Message sent!')
      inputFieldReset.value = ''
    },
    (error) => {
      alert('Message not sent', error)
    },
  )
}
</script>
<template>
  <div class="w-full flex flex-col items-center gap-8">
    <h1 class="text-4xl font-semibold">Contact Me</h1>
    <form class="form w-full sm:w-3/5 md:w-2/5" ref="form" @submit.prevent="sendMail">
      <div class="w-full mt-8 text-justify">
        <p class="mb-5">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            :value="inputFieldReset"
            class="rounded-md dark:bg-gray-700 bg-gray-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          />
        </p>
        <p class="mb-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            :value="inputFieldReset"
            class="rounded-md dark:bg-gray-700 bg-gray-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          />
        </p>
        <p class="mb-5">
          <textarea
            placeholder="Message"
            name="message"
            :value="inputFieldReset"
            class="rounded-md h-60 dark:bg-gray-700 bg-gray-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-gray-700 dark:placeholder:text-gray-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          ></textarea>
        </p>
        <button
          type="submit"
          name="send"
          class="inline-flex items-center justify-center px-4 py-2 bg-gray-300 dark:bg-slate-600 rounded-md shadow-md cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors duration-300 ease-in-out"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>
    <NotificationModal v-if="showNotification" @close-modal="closeNotification">
      <template #message>Thank you for your message, I will be in touch soon!</template>
    </NotificationModal>
  </div>
</template>
