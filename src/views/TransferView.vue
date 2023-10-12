<script lang="ts">
import { defineComponent } from "vue";
import TransferForm from "../components/TransferForm.vue"

export default defineComponent({
  name: "TransferView",
  components: { TransferForm }
})
</script>

<template>
  <TransferForm />
</template>
