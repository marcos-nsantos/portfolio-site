<template>
  <nav
    class="flex justify-between p-5 items-center bg-stone-200 sm:container lg:container absolute w-full lg:justify-around"
  >
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

    <a
      type="button"
      href="#"
      class="flex items center items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors duration-300"
    >
      <i class="w-4 h-4 fa-solid fa-download" />
      Resume
    </a>
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
      ],
    };
  },
};
</script>

<style scoped></style>
