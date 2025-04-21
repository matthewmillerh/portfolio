<script setup>
import { onMounted, ref } from 'vue'

const show = ref(false) // used to trigger the vue transition when the notification component is mounted

defineProps(['messageStatus'])

// set the value to true only after the component has been mounted in order for the transtion to be triggered
onMounted(() => {
  show.value = true
})

const close = () => {
  show.value = false
}
</script>

<template>
  <Transition name="modal-wrapper" @after-leave="$emit('close-modal')">
    <div
      v-if="show"
      class="fixed top-0 bottom-0 left-0 right-0 z-20 bg-black/10 backdrop-blur-md"
      @click="close"
    >
      <div
        class="modal rounded-md px-8 py-6 z-30 top-52 absolute left-1/2 -translate-x-1/2 font-semibold text-lg shadow-md flex flex-col items-center gap-4"
        :class="
          messageStatus == 1
            ? 'dark:bg-gray-700/75 bg-gray-100/75'
            : 'dark:bg-red-900/75 bg-red-300/75'
        "
        @click.stop
      >
        <slot name="message"></slot>
        <button
          class="inline-flex items-center justify-center px-4 py-2 bg-gray-300 dark:bg-slate-600 rounded-md shadow-md cursor-pointer hover:bg-gray-300/50 dark:hover:bg-gray-600/50 transition-colors duration-300 ease-in-out text-sm"
          @click="close"
        >
          <span>Dismiss</span>
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Transition for the entire wrapper */
.modal-wrapper-enter-active,
.modal-wrapper-leave-active {
  transition: opacity 0.3s ease-in-out; /* Fade in/out for the whole thing */
}

.modal-wrapper-enter-from,
.modal-wrapper-leave-to {
  opacity: 0;
}

/* Transitions for the modal content */
.modal-wrapper-enter-active .modal,
.modal-wrapper-leave-active .modal {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease-in;
}

.modal-wrapper-enter-from .modal,
.modal-wrapper-leave-to .modal {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
