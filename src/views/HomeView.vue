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
  <div>
    <div class="flex justify-center items-center w-full gap-4 mt-4">
      <button type="button" @click="credit()"
        class="w-auto rounded-md transition-all bg-blue-800 py-2 px-4 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
        credit
      </button>
      <button type="button" @click="debit()"
        class="w-auto rounded-md transition-all bg-blue-800 py-2 px-4 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
        debit
      </button>
      <button type="button" @click="transfer()"
        class="w-auto rounded-md transition-all bg-blue-800 py-2 px-4 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
        transfer
      </button>
    </div>
    <BalanceDisplay />
    <TransactionsList />
  </div>
</template>
