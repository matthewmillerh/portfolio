<script setup></script>
<template>
  <li
    class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-slate-100 to-slate-200 dark:bg-gradient-to-br dark:from-slate-600 dark:to-slate-700 transition-colors duration-300 ease-in-out"
  >
    <slot name="icon"></slot>
    <span><slot name="label"></slot></span>
  </li>
</template>
