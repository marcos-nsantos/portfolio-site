<template>
  <label v-if="label" class="text-lg font-semibold" :for="label">{{
    label
  }}</label>
  <input
    :id="label"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="border-2 border-gray-900 rounded-md p-2 focus:outline-none focus:border-blue-900"
  />
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped></style>
