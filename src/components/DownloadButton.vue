<template>
  <a
    :href="url"
    target="_blank"
    type="button"
    class="flex items center items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors duration-300"
  >
    <i class="w-4 h-4 fa-solid fa-download" />
    <slot />
  </a>
</template>

<script>
export default {
  name: "DownloadButton",
  props: ["url"],
};
</script>

<style scoped></style>
