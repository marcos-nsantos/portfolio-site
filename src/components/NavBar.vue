<template>
  <nav class="flex justify-between p-3 pt-7 items-center">
    <div class="flex justify-around gap-5 text-black text-base font-medium">
      <router-link
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        class="hover:text-blue-900 transition-colors duration-300"
      >
        {{ link.name }}
      </router-link>
    </div>
    <div class="flex justify-between gap-3 text-xl">
      <a href="https://github.com/marcos-nsantos" target="_blank">
        <i class="w-6 h-6 fa-brands fa-github" />
      </a>
      <a href="https://www.linkedin.com/in/marcos-santos-d" target="_blank">
        <i class="w-6 h-6 fa-brands fa-linkedin" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
};
</script>

<style scoped></style>
