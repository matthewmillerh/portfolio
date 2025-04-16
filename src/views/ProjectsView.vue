<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ProjectCard from '@/components/ProjectCard.vue'
</script>
<template>
  <main>
    <div class="w-full flex flex-col items-center gap-8">
      <!-- Artist portfolio website -->
      <ProjectCard image-name="project_rae_smith.png" repo-name="raesmith" live-link="">
        <template #project-title>Artist Portfolio Website</template>
        <template #date>2024 - present</template>
        <template #description>
          This project is an ongoing effort to create a dedicated online portfolio for South African
          artist Emily Rae Smith Labuschagne. The final website will provide an efficient and
          professional platform to showcase her artistic works.
        </template>
      </ProjectCard>

      <!-- Online Store for small business -->
      <ProjectCard
        image-name="project_pentique.png"
        repo-name="pentique"
        live-link="http://www.pentique.co.za"
      >
        <template #project-title>Online Store for Small Business</template>
        <template #date>2024 - present</template>
        <template #description>
          Originally developed in PHP with a custom content management system, this website is
          undergoing a complete rewrite using a modern tech stack. The project is transitioning to a
          Vue.js frontend and an Express.js backend to enhance performance, security, and
          maintainability, addressing previous vulnerabilities identified in the initial
          implementation.
        </template>
      </ProjectCard>

      <!-- Travel Itinerary Website -->
      <ProjectCard
        image-name="project_itinerary.png"
        repo-name="itinerary"
        live-link="https://matthewmillerh-itinerary.netlify.app/"
      >
        <template #project-title>Travel Itinerary</template>
        <template #date>2024</template>
        <template #description>
          Created before a lengthy trip to Europe, this web application started as a way to produce
          a presentable itinerary for a Schengen Visa. Driven by personal interest, additional
          functionalities were integrated, expanding its capabilities beyond the initial
          requirement.
        </template>
      </ProjectCard>

      <!-- The Photographers Gallery ZA -->
      <ProjectCard
        image-name="project_photographersgalleryza.png"
        repo-name="thephotographersgallery"
        live-link=""
      >
        <template #project-title>Photo Gallery Website for Cape Town Art Gallery</template>
        <template #date>2015 (offline)</template>
        <template #description>Test</template>
      </ProjectCard>
    </div>
  </main>
</template>
<style scoped></style>
