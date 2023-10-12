<script lang="ts">
import { RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue"
import { defineComponent } from 'vue';
import { Account } from './mapping';

export default defineComponent({
  name: "App",
  components: { NavBar },
  data() {
    let isLoggedIn: boolean = false
    return { loggedAccount: new Account(), isLoggedIn }
  },
  methods: {
    login(account: Account): void {
      this.loggedAccount = account;
      this.isLoggedIn = true
    },
    updateAccount(account: Account) {
      this.loggedAccount = account;
    }
  }
})
</script>

<template>
  <div>
    <NavBar :is-logged-in="isLoggedIn" />
    <main>
      <RouterView @login="login" @update-account="updateAccount" :default-account="loggedAccount"
        :logged-account="loggedAccount" />
    </main>
  </div>
</template>