<script lang="ts">
import { defineComponent } from "vue";
import CreditForm from "../components/CreditForm.vue"
import { Account } from "@/mapping";

export default defineComponent({
  name: "CreditView",
  components: { CreditForm },
  props: {
    loggedAccount: {
      type: Account,
      required: true
    }
  },
})
</script>

<template>
  <CreditForm :logged-account="loggedAccount" />
</template>
