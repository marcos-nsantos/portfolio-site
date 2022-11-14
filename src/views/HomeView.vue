<template>
  <main class="flex flex-col justify-center items-center h-screen bg-stone-200">
    <h1 class="text-5xl font-bold text-gray-900">Marcos Santos</h1>
    <h2 class="text-2xl font-medium text-gray-900">Back End Developer</h2>
    <div class="flex justify-center gap-5 mt-5 text-3xl">
      <a href="https://github.com/marcos-nsantos" target="_blank">
        <i class="w-6 h-6 fa-brands fa-github hover:text-blue-900" />
      </a>
      <a href="https://www.linkedin.com/in/marcos-santos-d" target="_blank">
        <i class="w-6 h-6 fa-brands fa-linkedin hover:text-blue-900" />
      </a>
    </div>

    <div
      class="flex flex-col justify-center items-center mt-10 overflow-x-hidden hover:overflow-x-auto w-full flex-wrap"
    >
      <div class="flex justify-center gap-5 mt-5 text-3xl p-2">
        <i class="w-6 h-6 fa-brands fa-python" />
        <i class="w-6 h-6 fa-brands fa-golang" />
        <i class="w-6 h-6 fa-brands fa-php" />
        <i class="w-6 h-6 fa-brands fa-docker" />
        <i class="w-6 h-6 fa-brands fa-git-alt" />
        <i class="w-6 h-6 fa-brands fa-aws" />
        <i class="w-6 h-6 fa-brands fa-linux" />
        <i class="w-6 h-6 fa-brands fa-vuejs" />
        <i class="w-6 h-6 fa-brands fa-html5" />
        <i class="w-6 h-6 fa-brands fa-css3-alt" />
        <i class="w-6 h-6 fa-brands fa-js-square" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped></style>
