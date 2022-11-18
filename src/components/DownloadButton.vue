<template>
  <a
    :href="url"
    target="_blank"
    type="button"
    :aria-roledescription="description"
    class="flex items center items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors duration-300"
  >
    <font-awesome-icon icon="fa-solid fa-download"></font-awesome-icon>
    <slot />
  </a>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "DownloadButton",
  components: { FontAwesomeIcon },
  props: ["url", "description"],
};
</script>

<style scoped></style>
