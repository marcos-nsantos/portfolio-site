<template>
  <div class="absolute w-full bg-stone-200">
    <nav class="flex justify-end py-5 bg-stone-200 w-11/12 lg:w-7/12 mx-auto">
      <DownloadButton :url="url" :description="resumeUrlDescription"
        >Resume</DownloadButton
      >
    </nav>
  </div>
</template>

<script>
import DownloadButton from "@/components/DownloadButton.vue";

export default {
  name: "NavBar",
  components: { DownloadButton },
  data() {
    return {
      url: "https://drive.google.com/file/d/1pxxXJsr7tA1fvlUW2FsObR7P7JOgyMNw/view",
      resumeUrlDescription: "Button to download the resume",
    };
  },
};
</script>

<style scoped></style>
