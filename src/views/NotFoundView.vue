<template>
  <main class="flex flex-col justify-center items-center h-screen bg-stone-200">
    <font-awesome-icon
      class="text-5xl text-red-900"
      icon="exclamation-triangle"
      aria-role="Warning icon"
    ></font-awesome-icon>
    <h1 class="text-4xl font-bold text-gray-900 mt-2">404</h1>
    <h2 class="text-2xl font-medium text-gray-900">Page not found</h2>

    <div class="mt-12 font-semibold">
      <div
        class="flex justify-center gap-5 text-xl hover:text-blue-900 hover:scale-105 transition-transform duration-200"
      >
        <router-link to="/">
          <font-awesome-icon
            icon="fa-solid fa-home"
            aria-roledescription="Go to home page"
          ></font-awesome-icon>
          <span class="text-gray-900 ml-2">Home page</span>
        </router-link>
      </div>

      <div
        class="flex justify-center gap-5 mt-2 text-xl hover:text-blue-900 hover:scale-105 transition-transform duration-200"
      >
        <a href="#" @click="goBack">
          <font-awesome-icon
            icon="fa-solid fa-arrow-left"
            aria-roledescription="Go back"
          ></font-awesome-icon>
          <span class="text-gray-900 ml-2">Go back</span>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
