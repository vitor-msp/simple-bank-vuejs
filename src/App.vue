<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  components: { NavBar }
})
</script>

<template>
  <header>
    <NavBar />
  </header>

  <RouterView />
</template>