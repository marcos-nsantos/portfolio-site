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

    <DownloadButton>Resume</DownloadButton>
  </nav>
</template>

<script>
import DownloadButton from "@/components/DownloadButton.vue";
export default {
  name: "NavBar",
  components: { DownloadButton },
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
