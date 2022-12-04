<template>
  <main class="flex flex-col justify-center items-center h-screen bg-stone-200">
    <h1 class="text-5xl font-bold text-gray-900">Marcos Santos</h1>
    <h2 class="text-2xl font-medium text-gray-900">Back End Developer</h2>

    <div class="flex justify-center gap-5 mt-5 text-3xl">
      <a
        href="https://github.com/marcos-nsantos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="hover:text-blue-900 hover:scale-12 transition-transform duration-200"
          icon="fa-brands fa-github-alt"
          aria-roledescription="GitHub. Project repository hosting service for version control using Git"
        ></font-awesome-icon>
      </a>
      <a
        href="https://www.linkedin.com/in/marcos-santos-d"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="hover:text-blue-900 hover:scale-12 transition-transform duration-200"
          icon="fa-brands fa-linkedin"
          aria-roledescription="LinkedIn. Professional social network"
        ></font-awesome-icon>
      </a>
    </div>

    <div class="flex flex-col items-center mt-24 py-2 w-11/12">
      <TechStacksIcons />
    </div>
  </main>
</template>

<script>
import TechStacksIcons from "@/components/TechStacks.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "HomeView",
  components: { FontAwesomeIcon, TechStacksIcons },
};
</script>
