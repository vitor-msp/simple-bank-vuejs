<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/home">home</RouterLink>
        <RouterLink to="/my-account">my account</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/sign-up">sign up</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>