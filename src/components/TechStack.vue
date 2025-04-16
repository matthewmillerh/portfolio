<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

const props = defineProps({
  repoProp: {
    type: String,
    required: true,
  },
})

// Github repository info
const username = 'matthewmillerh'
const repo = props.repoProp
const languageList = ref([])

// GitHub language colors
const languageColors = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#2b7489',
  Java: '#b07219',
  PHP: '#4F5D95',
  Vue: '#41b883',
  Unknown: '#cccccc',
}

// Fetch repository languages from GitHub API
async function fetchTechStack() {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    })
    if (!response.ok) {
      throw new Error('Failed to fetch repository languages')
    }
    const data = await response.json()

    // Calculate total bytes and percentages
    const totalBytes = Object.values(data).reduce((sum, bytes) => sum + bytes, 0)
    languageList.value = Object.keys(data).map((language) => ({
      name: language,
      percentage: totalBytes > 0 ? ((data[language] / totalBytes) * 100).toFixed(1) : 0,
    }))

    // Sort languages by percentage (descending)
    languageList.value.sort((a, b) => b.bytes - a.bytes)

    // Handle empty case
    if (languageList.value.length === 0) {
      //languageList.innerHTML = '<li>No languages detected</li>'
    }
  } catch (error) {
    console.error('Error:', error)
    //document.getElementById('language-list').innerHTML = '<li>Error loading tech stack</li>'
  }
}

onMounted(() => {
  fetchTechStack()
})
</script>
<template>
  <div class="mt-4">
    <!-- <h2 class="text-center">Tech Stack Used</h2> -->
    <div class="h-3.5 flex bg-amber-50 overflow-hidden rounded-4xl shadow-md">
      <div
        v-for="(language, index) in languageList"
        :key="index"
        class=""
        :style="
          'width: ' +
          language.percentage +
          '%; background-color: ' +
          languageColors[language.name] +
          ';'
        "
        :title="language.name + ': ' + language.percentage + '%'"
      ></div>
    </div>
    <ul class="text-sm">
      <li v-for="(language, index) in languageList" :key="index" class="inline-block h-4 mt-1">
        <p class="px-2">
          <span
            class="h-2.5 w-2.5 inline-block rounded-full"
            :style="'background-color: ' + languageColors[language.name] + ';'"
          ></span>
          <span class="px-1 font-semibold">{{
            language.name + ': ' + language.percentage + '%'
          }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
