<script lang="ts">
import { inactivateAccountUsecase, updateAccountUsecase } from '@/factory';
import { Account } from '@/mapping';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MyAccountForm",
    data() {
        let canEdit: boolean = false
        return { account: new Account(), canEdit }
    },
    props: {
        defaultAccount: {
            type: Account,
            required: true
        }
    },
    emits: ["update-account"],
    mounted() {
        this.account.account = { ...this.defaultAccount.account }
        this.account.account.owner = { ...this.defaultAccount.account?.owner }
    },
    methods: {
        async updateAccount() {
            const success = await updateAccountUsecase.execute(
                this.account.account!.accountNumber!,
                this.account.account!.owner!
            );
            if (!success) return;
            const updatedAccount = new Account()
            updatedAccount.account = { ...this.account.account }
            updatedAccount.account.owner = { ...this.account.account?.owner }
            this.$emit("update-account", updatedAccount)
            this.setCanEdit(false);
        },
        async inactivateAccount() {
            const success = await inactivateAccountUsecase.execute(
                this.account.account!.accountNumber!
            );
            if (success) location.replace("/login");
        },
        cancelEdit() {
            this.setCanEdit(false);
            this.account.account = { ...this.defaultAccount.account }
            this.account.account.owner = { ...this.defaultAccount.account?.owner }
        },
        setCanEdit(value: boolean) {
            this.canEdit = value
        }
    }
})
</script>

<template>
    <div class="default-form">
        <h2 class="text-3xl mb-3">my account</h2>
        <form @submit.prevent="updateAccount()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="accountNumber">account number</label>
                    <input type="text" id="accountNumber" :value="account.account?.accountNumber" disabled="true"
                        class="p-1" />
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input v-if="account.account && account.account.owner" type="text" id="name"
                        v-model="account.account!.owner!.name" :disabled="!canEdit" class="p-1" />
                </div>
                <div>
                    <label htmlFor="cpf">cpf</label>
                    <input type="text" id="cpf" :value="account.account?.owner?.cpf" disabled="true" class="p-1" />
                </div>
            </fieldset>
            <div v-if="canEdit" class="flex justify-between items-center w-full gap-2">
                <button type="button" @click="cancelEdit()"
                    class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    cancel
                </button>
                <button type="submit" class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    save
                </button>
            </div>
            <div v-else class="flex justify-between items-center w-full gap-2">
                <button type="button" @click="setCanEdit(true)"
                    class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    edit
                </button>
            </div>
        </form>
        <div class="flex justify-center items-center w-full gap-2 mt-4">
            <button type="button" @click="inactivateAccount()"
                class="px-4 w-auto rounded-md transition-all hover:bg-red-500 p-1 text-xl text-red-500 hover:text-gray-100">
                inactivate account
            </button>
        </div>
    </div>
</template>