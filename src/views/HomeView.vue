<script  lang="ts">
import { defineComponent } from "vue";
import BalanceDisplay from "../components/BalanceDisplay.vue"
import TransactionsList from "../components/TransactionsList.vue"

export default defineComponent({
  name: "HomeView",
  components: { BalanceDisplay, TransactionsList },
  methods: {
    credit() {
      this.$router.push("/credit");
    },
    debit() {
      this.$router.push("/debit");
    },
    transfer() {
      this.$router.push("/transfer");
    },
  }
})
</script>

<template>
  <main>
    <div>
      <div>
        <button type="button" @click="credit()">
          credit
        </button>
        <button type="button" @click="debit()">
          debit
        </button>
        <button type="button" @click="transfer()">
          transfer
        </button>
      </div>
      <BalanceDisplay />
      <TransactionsList />
    </div>
  </main>
</template>
