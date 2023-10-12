<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginForm",
    data() {
        let accountNumber: string = ""
        return {
            accountNumber
        }
    },
    methods: {
        async login() {
            // const success = await accountContext.login(+this.accountNumber);
            const success = true
            if (success) this.$router.push("/home")
        }
    }
})
</script>

<template>
    <div>
        <h2>login</h2>
        <form @submit.prevent="login()">
            <fieldset>
                <div>
                    <label htmlFor="accountNumber">account number</label>
                    <input type="text" id="accountNumber" v-model="accountNumber" />
                </div>
            </fieldset>
            <div>
                <button type="submit">
                    login
                </button>
            </div>
        </form>
    </div>
</template>
