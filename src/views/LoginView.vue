<template>
  <main class="flex flex-col justify-center items-center h-screen bg-stone-200">
    <h1 class="text-5xl font-bold text-gray-900">Login</h1>
    <h2 class="text-2xl font-medium text-gray-900">Access your account</h2>

    <form class="flex flex-col gap-5 mt-5 w-11/12 md:w-1/2 lg:w-1/3">
      <div class="flex flex-col gap-2">
        <BaseInput
          v-model="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="flex flex-col gap-2">
        <BaseInput
          v-model="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
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
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "LoginVue",
  components: { BaseInput },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
