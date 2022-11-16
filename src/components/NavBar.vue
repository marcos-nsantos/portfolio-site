<template>
  <nav class="flex justify-end p-5 bg-stone-200 absolute w-full">
    <DownloadButton :url="url">Resume</DownloadButton>
  </nav>
</template>

<script>
import DownloadButton from "@/components/DownloadButton.vue";
export default {
  name: "NavBar",
  components: { DownloadButton },
  data() {
    return {
      url: "https://drive.google.com/file/d/1pxxXJsr7tA1fvlUW2FsObR7P7JOgyMNw/view",
    };
  },
};
</script>

<style scoped></style>
