<script setup></script>
<template>
  <div class="mx-auto flex w-full flex-col gap-12 text-justify text-lg lg:w-4/5 xl:w-3/5">
    <h1 class="text-center text-4xl font-semibold">My Story</h1>
    <div class="flex flex-col-reverse items-center gap-8 sm:flex-row">
      <p>
        Hello, I'm Matt, a web developer currently based in Cape Town, South Africa. My path to
        becoming a developer has been a winding, yet enriching one. I initially laid my technical
        groundwork by earning a Certificate in Software Development followed by a BSc degree in
        Information Technology. However, upon graduating, my creative side took the lead, leading me
        to spend several formative years working as a professional artist alongside renowned South
        African artist Nicola Roos. Together, we specialized in creating striking life-sized
        figurative sculptures, primarily utilizing the unexpected medium of repurposed inner tyre
        tubes.
      </p>
      <!-- Image is wrapped in div with v-viewer directive to enable the image viewer -->
      <div
        v-viewer.static="{
          transition: true,
          scalable: false,
          rotatable: false,
          fullscreen: false,
          navbar: false,
          toolbar: false,
        }"
      >
        <img
          :src="'/img/matthewmiller_2.JPEG'"
          alt=""
          class="max-w-52 cursor-pointer rounded-md shadow-md"
        />
      </div>
    </div>

    <div class="hidden border-b-2 border-neutral-400 sm:block"></div>

    <div class="flex flex-col items-center gap-8 sm:flex-row">
      <!-- Image is wrapped in div with v-viewer directive to enable the image viewer -->
      <div
        class="flex flex-col items-center"
        v-viewer.static="{
          transition: true,
          scalable: false,
          rotatable: false,
          fullscreen: false,
          navbar: false,
          toolbar: false,
        }"
      >
        <img
          :src="'/img/matthewmiller_artwork.JPG'"
          alt=""
          class="max-w-80 cursor-pointer rounded-md shadow-md"
        />
        <div class="mt-1 text-center text-sm">
          <p class="italic">Obsidian Samurai XXIX</p>
          <p class="mt-1">
            Made in collaboration with
            <a href="https://www.nicolaroos.com/" class="underline">Nicola Roos</a>
          </p>
        </div>
      </div>
      <!-- text wrapper to create single flex item -->
      <div class="flex flex-col gap-4">
        <p>
          During my time as an artist, I discovered that my technical skills remained a valuable
          asset. I maintained a connection to the digital world by undertaking freelance web
          development projects, allowing me to continually apply and refine my coding abilities.
          This period honed my time-management, problem-solving, and client communication skills in
          a unique context.
        </p>
        <p>
          Now, I'm excited to fully re-immerse myself in the world of web development, bringing with
          me not only a strong technical background but also the creative thinking and visual
          awareness cultivated through my artistic endeavors. My current technical focus lies
          primarily with Vue.js for building interactive front-ends and Tailwind CSS for efficient
          styling. As I continue to develop my skills, I'm keen to explore and master new
          technologies within the web development landscape.
        </p>
        <p>
          If you're looking for a developer with a solid technical base and a creative edge, I'd
          love to hear from you.
        </p>
      </div>
    </div>
  </div>
</template>
