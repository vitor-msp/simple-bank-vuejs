<script lang="ts">
import { defineComponent } from "vue";
import DebitForm from "../components/DebitForm.vue"
import { Account } from "@/mapping";

export default defineComponent({
  name: "DebitView",
  components: { DebitForm },
  props: {
    loggedAccount: {
      type: Account,
      required: true
    }
  },
})
</script>

<template>
  <DebitForm :logged-account="loggedAccount" />
</template>
