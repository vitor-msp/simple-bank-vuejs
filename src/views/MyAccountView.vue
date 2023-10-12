<script lang="ts">
import { defineComponent } from "vue";
import MyAccountForm from "../components/MyAccountForm.vue"

export default defineComponent({
  name: "MyAccountView",
  components: { MyAccountForm }
})
</script>

<template>
  <MyAccountForm />
</template>