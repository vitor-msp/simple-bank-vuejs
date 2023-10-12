<script lang="ts">
import { defineComponent } from "vue";
import CreditForm from "../components/CreditForm.vue"

export default defineComponent({
  name: "CreditView",
  components: { CreditForm }
})
</script>

<template>
  <CreditForm />
</template>
