<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import NotificationModal from '@/components/NotificationModal.vue'

const form = ref(null)
const inputFieldReset = ref(null)
const messageStatus = ref(0)

// import emailjs keys from env variables
const emailjs_service_key = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjs_template_key = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjs_publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// emailjs function to send me the message via email
const sendMail = () => {
  emailjs.sendForm(emailjs_service_key, emailjs_template_key, form.value, emailjs_publicKey).then(
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
  <div class="flex w-full flex-col items-center gap-8">
    <h1 class="text-4xl font-semibold">Contact Me</h1>
    <form class="form w-full sm:w-3/5 md:w-2/5" ref="form" @submit.prevent="sendMail">
      <div class="mt-8 w-full text-justify">
        <!-- Name input field -->
        <p class="mb-5">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            :value="inputFieldReset"
            class="bg-neutral w-full rounded-md bg-neutral-100 px-2 py-1 inset-shadow-xs shadow-black/50 inset-shadow-black/50 outline-0 transition duration-300 ease-in-out placeholder:text-neutral-700 focus:shadow-sm dark:bg-neutral-700 dark:inset-shadow-black/75 dark:placeholder:text-neutral-300 dark:focus:shadow-md"
            required
          />
        </p>

        <!-- Email input field -->
        <p class="mb-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            :value="inputFieldReset"
            class="w-full rounded-md bg-neutral-100 px-2 py-1 inset-shadow-xs shadow-black/50 inset-shadow-black/50 outline-0 transition duration-300 ease-in-out placeholder:text-neutral-700 focus:shadow-sm dark:bg-neutral-700 dark:inset-shadow-black/75 dark:placeholder:text-neutral-300 dark:focus:shadow-md"
            required
          />
        </p>

        <!-- Message input field -->
        <p class="mb-5">
          <textarea
            placeholder="Message"
            name="message"
            :value="inputFieldReset"
            class="h-60 w-full rounded-md bg-neutral-100 px-2 py-1 inset-shadow-xs shadow-black/50 inset-shadow-black/50 outline-0 transition duration-300 ease-in-out placeholder:text-neutral-700 focus:shadow-sm dark:bg-neutral-700 dark:inset-shadow-black/75 dark:placeholder:text-neutral-300 dark:focus:shadow-md"
            required
          ></textarea>
        </p>
        <button
          type="submit"
          name="send"
          class="inline-flex cursor-pointer items-center justify-center rounded-md bg-neutral-300 px-4 py-2 shadow-md transition-colors duration-300 ease-in-out hover:bg-neutral-300/50 dark:bg-neutral-600 dark:hover:bg-neutral-600/50"
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
        <!-- Succeess message -->
        <span v-if="messageStatus == 1">Thank you for your message, I will be in touch soon!</span>

        <!-- Failure message -->
        <span v-if="messageStatus == 2">
          An error has occurred, please send me an email at
          <a href="mailto:matthewmillerh@outlook.com">matthewmillerh@outlook.com</a>
        </span>
      </template>
    </NotificationModal>
  </div>
</template>
