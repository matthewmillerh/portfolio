<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onBeforeMount(() => {
  window.open('/matthew_jason_miller_cv_2025.pdf')
  router.push('/')
})
</script>
<template>
  <div class="mx-auto w-full lg:w-4/5 xl:w-3/5"></div>
</template>
