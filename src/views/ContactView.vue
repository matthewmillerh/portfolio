<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import NotificationModal from '@/components/NotificationModal.vue'

const form = ref(null)
const inputFieldReset = ref(null)
const messageStatus = ref(0)

const sendMail = () => {
  emailjs.sendForm('service_qg7afqq', 'template_yrm6lm8', form.value, 'RyIXXr7-ppm95PWre').then(
    () => {
      messageStatus.value = 1
      inputFieldReset.value = ''
    },
    () => {
      messageStatus.value = 2
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
            class="rounded-md dark:bg-neutral-700 bg-neutral bg-neutral-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-neutral-700 dark:placeholder:text-neutral-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          />
        </p>
        <p class="mb-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            :value="inputFieldReset"
            class="rounded-md dark:bg-neutral-700 bg-neutral-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-neutral-700 dark:placeholder:text-neutral-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          />
        </p>
        <p class="mb-5">
          <textarea
            placeholder="Message"
            name="message"
            :value="inputFieldReset"
            class="rounded-md h-60 dark:bg-neutral-700 bg-neutral-100 inset-shadow-xs inset-shadow-black/50 dark:inset-shadow-black/75 w-full px-2 py-1 placeholder:text-neutral-700 dark:placeholder:text-neutral-300 outline-0 focus:shadow-sm dark:focus:shadow-md shadow-black/50 transition duration-300 ease-in-out"
            required
          ></textarea>
        </p>
        <button
          type="submit"
          name="send"
          class="inline-flex items-center justify-center px-4 py-2 bg-neutral-300 dark:bg-neutral-600 rounded-md shadow-md cursor-pointer hover:bg-neutral-300/50 dark:hover:bg-neutral-600/50 transition-colors duration-300 ease-in-out"
        >
          <span>Submit</span>
        </button>
      </div>
    </form>

    <!-- Display a notification modal to indicate whether the message was successfully sent or failed. -->
    <NotificationModal
      v-if="messageStatus > 0"
      @close-modal="messageStatus = 0"
      :message-status="messageStatus"
    >
      <template #message>
        <span v-if="messageStatus == 1">Thank you for your message, I will be in touch soon!</span>
        <span v-if="messageStatus == 2">
          An error has occurred, please send me an email at
          <a href="mailto:matthewmillerh@outlook.com">matthewmillerh@outlook.com</a>
        </span>
      </template>
    </NotificationModal>
  </div>
</template>
