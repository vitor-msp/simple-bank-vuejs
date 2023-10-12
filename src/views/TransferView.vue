<script lang="ts">
import { defineComponent } from "vue";
import TransferForm from "../components/TransferForm.vue"
import { Account } from "@/mapping";

export default defineComponent({
  name: "TransferView",
  components: { TransferForm },
  props: {
    loggedAccount: {
      type: Account,
      required: true
    }
  },
})
</script>

<template>
  <TransferForm :logged-account="loggedAccount" />
</template>
