<script lang="ts">
import { defineComponent } from "vue";
import MyAccountForm from "../components/MyAccountForm.vue"
import { Account } from "@/mapping"

export default defineComponent({
  name: "MyAccountView",
  components: { MyAccountForm },
  props: {
    defaultAccount: {
      type: Account,
      required: true
    }
  }
})
</script>

<template>
  <MyAccountForm :default-account="defaultAccount" />
</template>