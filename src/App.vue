<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Inicio</RouterLink>
      <RouterLink to="/projetos">Projetos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
