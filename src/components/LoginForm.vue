<script lang="ts">
import { getAccountUsecase } from '@/factory';
import { Account } from '@/mapping';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LoginForm",
    data() {
        let accountNumber: string = ""
        return {
            accountNumber
        }
    },
    emits: ["login"],
    methods: {
        async login() {
            const response = await getAccountUsecase.execute(+this.accountNumber)
            if (!response) return
            const account = new Account()
            account.account = response
            this.$emit("login", account)
            this.$router.push("/home")
        }
    }
})
</script>

<template>
    <div class="default-form">
        <h2 class="text-3xl mb-3">login</h2>
        <form @submit.prevent="login()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="accountNumber">account number</label>
                    <input type="text" id="accountNumber" v-model="accountNumber" class="p-1" />
                </div>
            </fieldset>
            <div class="flex justify-between items-center w-full gap-2">
                <button type="submit" class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    login
                </button>
            </div>
        </form>
    </div>
</template>
