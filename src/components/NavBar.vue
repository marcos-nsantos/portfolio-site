<template>
  <nav class="flex justify-end p-5 bg-stone-200 absolute w-full">
    <DownloadButton>Resume</DownloadButton>
  </nav>
</template>

<script>
import DownloadButton from "@/components/DownloadButton.vue";
export default {
  name: "NavBar",
  components: { DownloadButton },
};
</script>

<style scoped></style>
