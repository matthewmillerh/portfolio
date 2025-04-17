<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const form = ref(null)
const inputFieldReset = ref(null)

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
  <div class="w-full flex flex-col items-center gap-8"></div>
</template>
