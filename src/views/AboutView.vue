<script setup></script>
<template>
  <div class="w-full md:w-4/5 mx-auto flex flex-col items-center gap-8 text-justify text-lg">
    <h1 class="text-4xl font-semibold">My Story</h1>
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
      class="max-w-96 cursor-pointer"
      v-viewer.static="{
        transition: true,
        scalable: false,
        rotatable: false,
        fullscreen: false,
        navbar: false,
        toolbar: false,
      }"
    >
      <img :src="'/img/matthewmiller_artwork.JPG'" alt="" class="rounded-md shadow-md" />
    </div>
    <div class="text-sm -mt-3 text-center">
      <p class="italic">Obsidian Samurai XXIX</p>
      <p class="mt-1">
        Made in collaboration with
        <a href="https://www.nicolaroos.com/" class="underline">Nicola Roos</a>
      </p>
    </div>
    <p>
      During my time as an artist, I discovered that my technical skills remained a valuable asset.
      I maintained a connection to the digital world by undertaking freelance web development
      projects, allowing me to continually apply and refine my coding abilities. This period honed
      my time-management, problem-solving, and client communication skills in a unique context.
    </p>
    <p>
      Now, I'm excited to fully re-immerse myself in the world of web development, bringing with me
      not only a strong technical background but also the creative thinking and visual awareness
      cultivated through my artistic endeavors. My current technical focus lies primarily with
      Vue.js for building interactive front-ends and Tailwind CSS for efficient styling. As I
      continue to develop my skills, I'm keen to explore and master new technologies within the web
      development landscape.
    </p>
    <p>
      If you're looking for a developer with a solid technical base and a creative edge, I'd love to
      hear from you.
    </p>
  </div>
</template>
