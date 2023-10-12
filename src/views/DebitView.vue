<script lang="ts">
import { defineComponent } from "vue";
import DebitForm from "../components/DebitForm.vue"

export default defineComponent({
  name: "DebitView",
  components: { DebitForm }
})
</script>

<template>
  <DebitForm />
</template>
