<template>
  <main class="flex flex-col justify-center items-center h-screen bg-stone-200">
    <h1 class="text-5xl font-bold text-gray-900">Login</h1>
    <h2 class="text-2xl font-medium text-gray-900">Access your account</h2>

    <form
      class="flex flex-col gap-5 mt-5 w-11/12 md:w-1/2 lg:w-1/3"
      @submit.prevent="onSubmit"
    >
      <div class="flex flex-col gap-2">
        <BaseInput
          label="Email"
          type="email"
          v-model="email"
          :error="emailError"
          @change="handleChange"
          @blur="handleChange"
        />
      </div>

      <div class="flex flex-col gap-2">
        <BaseInput
          label="Password"
          type="password"
          v-model="password"
          :error="passwordError"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-900 text-white rounded-md p-2 text-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
      >
        Login
      </button>
    </form>
  </main>
</template>

<script>
import { useField, useForm } from "vee-validate";
import BaseInput from "../components/BaseInput.vue";

export default {
  components: { BaseInput },
  setup() {
    function onSubmit() {
      alert("Submitted");
    }

    const validations = {
      email: (value) => {
        if (!value) return "This field is required";

        const regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(value).toLowerCase())) {
          return "Please enter a valid email address";
        }
        return true;
      },

      password: (value) => {
        const requiredMessage = "This field is required";
        if (value === undefined || value === null) return requiredMessage;
        if (!String(value).length) return requiredMessage;
        return true;
      },
    };

    useForm({ validationSchema: validations });

    const {
      value: email,
      errorMessage: emailError,
      handleChange,
    } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    return {
      onSubmit,
      email,
      emailError,
      password,
      passwordError,
      handleChange,
    };
  },
};
</script>
