<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<template>
  <main>
    <div
      class="w-full flex md:justify-evenly justify-center items-center flex-col md:flex-row gap-4"
    >
      <div
        class="w-full md:w-1/2 h-96 p-6 flex justify-center flex-col items-center border-b-4 rounded-md border-gray-300 dark:border-gray-500 shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
      >
        <img :src="'/img/matthewmiller.JPEG'" alt="" class="max-h-72 rounded-md shadow-md" />
        <p class="p-2 flex items-center transition-colors duration-300 ease-in-out">
          <font-awesome-icon
            icon="fa-location-dot"
            size="lg"
            class="mr-2 transition-colors duration-300 ease-in-out"
          />
          <a href="https://maps.app.goo.gl/R6XXiDs4XcSgxh54A" class="hover:underline"
            >Lake Bled, Slovenia</a
          >
        </p>
      </div>
      <div
        class="p-6 w-full md:w-1/2 min-h-96 flex justify-center flex-col border-t-4 border-r-4 border-gray-300 dark:border-gray-500 bg-gradient-to-bl from-gray-100 to-gray-50 dark:bg-gradient-to-bl dark:from-gray-700/75 dark:to-gray-800/75 shadow-md rounded-md transition-colors duration-300 ease-in-out"
      >
        <h1 class="text-4xl">Hi, I'm Matt</h1>
        <p class="text-xl mt-2">
          I create streamlined web solutions by simplifying the complex. I appreciate the beauty of
          minimalism but also thrive when diving into the chaos and intricacies of challenging
          projects.
        </p>
      </div>
    </div>
    <div
      class="mt-12 py-8 rounded-md shadow-md bg-gray-50 dark:bg-gray-700/30 transition-colors duration-300 ease-in-out"
    >
      <h1 class="text-center pb-2 text-4xl">Tools I'm Currently Using</h1>
      <h2 class="text-center p-6 text-2xl">Frontend Development</h2>
      <div>
        <ul class="text-center">
          <li
            class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-html5" size="2xl" class="pr-2" />
            <span>Html</span>
          </li>
          <li
            class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-css" size="2xl" class="pr-2" />
            <span>CSS</span>
          </li>
          <li
            class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-js" size="2xl" class="pr-2" />
            <span>Javascript</span>
          </li>
          <li
            class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-vuejs" size="2xl" class="pr-2" />
            <span>Vue.js</span>
          </li>
          <li
            class="mx-1 mb-2 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <!-- Tailwind Icon -->
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.00001 9.96875C7.66657 7.26052 9.33344 5.90625 12 5.90625C16 5.90625 16.5 8.95312 18.5 9.46093C19.8334 9.79958 21 9.29176 22 7.9375C21.3334 10.6457 19.6665 12 17 12C13 12 12.5 8.95312 10.5 8.44531C9.16658 8.10667 8 8.61448 7.00001 9.96875ZM2 16.0625C2.66656 13.3543 4.33343 12 7.00001 12C11 12 11.5 15.0469 13.5 15.5547C14.8334 15.8933 16 15.3855 17 14.0312C16.3334 16.7395 14.6666 18.0937 12 18.0937C8 18.0937 7.50001 15.0469 5.50001 14.5391C4.16656 14.2004 3 14.7082 2 16.0625Z"
                fill="currentColor"
              />
            </svg>
            <span>Tailwind CSS</span>
          </li>
          <li
            class="px-4 mx-1 mb-2 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-bootstrap" size="2xl" class="pr-2" />
            <span>Bootstrap</span>
          </li>
        </ul>
      </div>
      <h2 class="text-center p-6 mt-6 text-2xl">Backend Development</h2>
      <div>
        <ul class="text-center">
          <li
            class="mx-1 px-4 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <!-- Expressjs Icon -->
            <svg
              width="30"
              height="30"
              viewBox="0 -4 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4929 6.72509C20.7487 6.39125 21.145 6.19511 21.5657 6.19511H21.9059L17.5144 11.9376L22 17.8035H21.6598C21.2391 17.8035 20.8428 17.6073 20.5874 17.2735L17.0108 12.5965L13.4342 17.2735C13.1788 17.6073 12.7826 17.8035 12.3619 17.8035H12.0216L16.5072 11.9376L12.1157 6.19511H12.4559C12.8762 6.19511 13.2729 6.39125 13.5279 6.72509L17.0104 11.2792L20.4929 6.72509Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.56256 17.1462C7.48675 17.8483 9.4994 17.0521 10.5217 15.4986C10.7219 15.194 11.0529 15.0014 11.4176 15.0014H11.673C10.7331 17.4376 7.95309 18.857 5.30998 17.9059C3.28693 17.1778 2 15.1792 2 13.0292V10.7984C2 7.88032 4.51101 5.53783 7.48595 5.81763C10.0786 6.06141 12.0072 8.34105 12.0072 10.9449V12.5997H2.80058V13.0436C2.80058 14.8457 3.86975 16.5285 5.56256 17.1462ZM7.0036 6.59539C4.68593 6.59539 2.80058 8.48075 2.80058 10.7984V11.7991H11.2066V10.7984C11.2066 8.48075 9.32127 6.59539 7.0036 6.59539Z"
                fill="currentColor"
              />
            </svg>
            <span>Express.js</span>
          </li>
          <li
            class="px-4 mx-1 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-bootstrap" size="2xl" class="pr-2" />
            <span>PHP</span>
          </li>
        </ul>
      </div>
      <h2 class="text-center p-6 mt-6 text-2xl">Databases</h2>
      <div>
        <ul class="text-center">
          <li
            class="px-4 mx-1 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <!-- MYSQL Icon -->
            <svg
              width="30"
              height="30"
              viewBox="0 -4 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.4221 17.3372C19.3341 17.3069 18.4901 17.4184 17.7827 17.716C17.579 17.7978 17.2522 17.7978 17.2253 18.0541C17.3342 18.1617 17.3473 18.3378 17.4427 18.4869C17.6058 18.7575 17.8918 19.122 18.1501 19.3111L19.0207 19.9332C19.5512 20.2575 20.1498 20.4469 20.6666 20.7714C20.966 20.9608 21.2652 21.2041 21.5646 21.4071C21.717 21.5153 21.8094 21.6914 22 21.7587V21.7178C21.9049 21.5965 21.8774 21.4208 21.7826 21.285L21.374 20.8932C20.9797 20.366 20.4897 19.906 19.9592 19.5278C19.5238 19.2302 18.5718 18.8247 18.395 18.3248L18.3681 18.2945C18.6669 18.2641 19.0207 18.159 19.3067 18.0778C19.7695 17.9566 20.1909 17.9833 20.6666 17.8617L21.32 17.6723V17.5511C21.0752 17.3078 20.8983 16.9832 20.6401 16.7536C19.9464 16.1587 19.1841 15.5772 18.395 15.0906C17.9733 14.8203 17.429 14.6442 16.9801 14.4148C16.8164 14.3336 16.5447 14.293 16.4496 14.1578C16.2041 13.8609 16.0685 13.4684 15.8916 13.1166L14.7762 10.7642C14.5314 10.237 14.3813 9.7097 14.0825 9.22305C12.6811 6.92458 11.1571 5.53219 8.81722 4.16644C8.3141 3.8825 7.71557 3.76038 7.07918 3.6119L6.05895 3.55735C5.84091 3.46281 5.6235 3.20584 5.43294 3.08403C4.65753 2.59737 2.65758 1.54283 2.08586 2.93251C1.71844 3.81129 2.63014 4.67643 2.93963 5.12278C3.17137 5.43371 3.47018 5.7852 3.63393 6.13673C3.7254 6.36642 3.75589 6.61006 3.85133 6.85338C4.06874 7.44823 4.27303 8.11093 4.55874 8.66549C4.7112 8.94941 4.87128 9.24728 5.06186 9.50394C5.17071 9.65547 5.3613 9.72032 5.40184 9.96365C5.21128 10.2343 5.19815 10.6394 5.0893 10.9779C4.59929 12.5057 4.78987 14.3984 5.48357 15.5233C5.70158 15.8612 6.21535 16.6051 6.9124 16.3209C7.52466 16.0775 7.38808 15.3069 7.56492 14.6309C7.60608 14.4687 7.57864 14.3606 7.66006 14.2521V14.2824L8.21806 15.4045C8.63975 16.0669 9.37459 16.7566 9.98657 17.2166C10.3128 17.4599 10.5714 17.8793 10.9794 18.0278V17.9869H10.9525C10.8708 17.8657 10.7483 17.8111 10.6394 17.7166C10.3945 17.4733 10.1226 17.1757 9.932 16.9054C9.36087 16.1484 8.85776 15.3099 8.40862 14.4448C8.19061 14.0257 8.00005 13.566 7.8238 13.147C7.74148 12.9845 7.74148 12.7409 7.6058 12.6603C7.40148 12.9572 7.10268 13.2148 6.95235 13.5797C6.69377 14.1609 6.66696 14.8775 6.57182 15.6211C6.51693 15.6348 6.54131 15.6211 6.51693 15.6515C6.08211 15.5436 5.93208 15.0969 5.76896 14.7187C5.36099 13.7587 5.29267 12.2176 5.64638 11.1088C5.74152 10.8249 6.15012 9.93242 5.98697 9.66213C5.90464 9.40518 5.63328 9.25668 5.48326 9.05365C5.30639 8.7967 5.11643 8.47246 4.99386 8.18851C4.6676 7.43094 4.50447 6.59309 4.15046 5.8358C3.98671 5.48431 3.70131 5.11915 3.46988 4.79492C3.21131 4.42977 2.92622 4.1728 2.72192 3.74038C2.65392 3.58887 2.55879 3.34827 2.66765 3.18585C2.69448 3.07766 2.74936 3.03433 2.85761 3.01009C3.03446 2.85858 3.53818 3.0507 3.71503 3.1313C4.21815 3.33433 4.63985 3.52342 5.06155 3.80705C5.25213 3.9422 5.45641 4.19917 5.70126 4.26704H5.98728C6.4227 4.36159 6.91209 4.29735 7.31978 4.41856C8.0409 4.64886 8.69373 4.98644 9.27917 5.35188C11.0611 6.47397 12.5308 8.06943 13.5236 9.97609C13.6867 10.287 13.7547 10.5709 13.9048 10.8955C14.1908 11.5582 14.5445 12.2339 14.8296 12.8833C15.1156 13.5188 15.3876 14.1682 15.7955 14.6954C15.9998 14.9794 16.8158 15.1278 17.1829 15.2766C17.4552 15.3978 17.8766 15.5069 18.1221 15.6554C18.5843 15.9393 19.0469 16.2639 19.482 16.5748C19.6994 16.7366 20.38 17.0748 20.4205 17.3445L20.4221 17.3372ZM6.54834 5.58823C6.36037 5.58658 6.173 5.6093 5.99094 5.65581V5.68612H6.01779C6.12662 5.90247 6.31721 6.05128 6.4532 6.24065L6.76635 6.88973L6.79316 6.85944C6.98376 6.7243 7.07918 6.50792 7.07918 6.18367C6.99748 6.08916 6.98407 5.9943 6.91606 5.89975C6.83433 5.76461 6.65749 5.69672 6.54834 5.58886V5.58823Z"
                fill="currentColor"
              />
            </svg>
            <span>MYSQL</span>
          </li>
        </ul>
      </div>
      <h2 class="text-center p-6 mt-6 text-2xl">Version Control</h2>
      <div>
        <ul class="text-center">
          <li
            class="px-4 mx-1 py-2 inline-flex items-center shadow-md rounded-4xl bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gradient-to-br dark:from-gray-600 dark:to-gray-700 transition-colors duration-300 ease-in-out"
          >
            <font-awesome-icon icon="fa-brands fa-git-alt" size="2xl" class="pr-2" />
            <span>Git</span>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="mt-12 py-8 rounded-md shadow-md bg-gray-50 dark:bg-gray-700/30 transition-colors duration-300 ease-in-out"
    >
      <h1 class="text-center mb-8 text-4xl">Projects I'm Currently Working On</h1>
      <div class="flex justify-center items-center">
        <div
          class="w-1/2 p-4 m-4 rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
        >
          <h1>Artist Portfolio Website</h1>
          <img :src="'/img/project_rae_smith.png'" alt="" class="h-72 rounded-md" />
        </div>
        <div
          class="w-1/2 p-4 m-4 rounded-md shadow-md bg-gradient-to-br from-gray-100 to-gray-50 dark:bg-gradient-to-br dark:from-gray-700/75 dark:to-gray-800/75 transition-colors duration-300 ease-in-out"
        >
          <h1 class="mb-2">Online Store for Small Business</h1>
          <img :src="'/img/project_pentique.png'" alt="" class="h-72 rounded-md" />
          <p>
            This project was originally written in PHP and includes a content management system for
            the user. It had some security issues as I was quite a novice when I first made it. I am
            in the process of rewriting the entire website using Vue.js with an Express.js backend.
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
