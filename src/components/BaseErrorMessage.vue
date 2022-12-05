<template>
  <p aria-live="assertive" class="text-red-500 text-sm" :id="id">
    <slot />
  </p>
</template>

<script>
export default {
  name: "BaseErrorMessage",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped></style>
