<script lang="ts">
import type { Account } from '@/core/domain/Account';
import { inactivateAccountUsecase } from '@/factory';
import { defineComponent } from 'vue';


export default defineComponent({
    name: "MyAccountForm",
    data() {
        const defaultAccount: Account = {
            accountNumber: 0,
            createdAt: new Date(),
            owner: { name: "", cpf: "" },
        }
        let canEdit: boolean = false
        return { account: defaultAccount, defaultAccount, canEdit }
    },
    mounted() {
        const response = true//accountContext.getAccount();
        if (!response) return;
        const accountFromApi: Account = {
            accountNumber: 100,
            createdAt: new Date(),
            owner: { name: "fulano de tal", cpf: "1010" },
        }
        this.defaultAccount = accountFromApi
        this.account = { ...accountFromApi }
        this.account.owner = { ...accountFromApi.owner }
    },
    methods: {
        async updateAccount() {
            const success = true
            // await accountContext.updateAccount(
            //     currentAccount.accountNumber!,
            //     account.owner!
            // );
            if (!success) return;
            // currentAccount.owner = account.owner;
            this.setCanEdit(false);
            this.defaultAccount = { ...this.account }
            this.defaultAccount.owner = { ...this.account.owner }
        },
        async inactivateAccount() {
            const success = true
            //     await inactivateAccountUsecase.execute(
            //     currentAccount.accountNumber!
            // );
            if (success) window.location.replace("/");
        },
        cancelEdit() {
            this.setCanEdit(false);
            this.account = { ...this.defaultAccount }
            this.account.owner = { ...this.defaultAccount.owner }
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
                    <input type="text" id="accountNumber" :value="account.accountNumber" disabled="true" class="p-1" />
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" v-model="account!.owner!.name" :disabled="!canEdit" class="p-1" />
                </div>
                <div>
                    <label htmlFor="cpf">cpf</label>
                    <input type="text" id="cpf" :value="account!.owner!.cpf" disabled="true" class="p-1" />
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