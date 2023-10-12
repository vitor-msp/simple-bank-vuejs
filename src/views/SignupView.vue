<script lang="ts">
import { defineComponent } from "vue";
import SignupForm from "../components/SignupForm.vue"

export default defineComponent({
  name: "SignupView",
  components: { SignupForm }
})
</script>

<template>
  <SignupForm />
</template>
