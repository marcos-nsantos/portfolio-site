<template>
  <label v-if="label" :for="uuid">
    {{ label }}
  </label>
  <input
    class="border-2 border-gray-900 rounded-md p-2 focus:outline-none focus:border-blue-900"
    v-bind="{
      ...$attrs,
      onInput: updateValue,
    }"
    :id="uuid"
    :value="modelValue"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  />
  <BaseErrorMessage v-if="error" :id="`${uuid}-error`">
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import SetupFormComponent from "../features/setupFormComponents";
import UniqueID from "../features/uniqueID";
import BaseErrorMessage from "./BaseErrorMessage.vue";

export default {
  components: { BaseErrorMessage },
  props: {
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  setup(props, context) {
    const { updateValue } = SetupFormComponent(props, context);
    const uuid = UniqueID().getID();

    return {
      updateValue,
      uuid,
    };
  },
};
</script>
