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
    <div>
        <h2>my account</h2>
        <form @submit.prevent="updateAccount()">
            <fieldset>
                <div>
                    <label htmlFor="accountNumber">account number</label>
                    <input type="text" id="accountNumber" :value="account.accountNumber" disabled="true" />
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" v-model="account!.owner!.name" :disabled="!canEdit" />
                </div>
                <div>
                    <label htmlFor="cpf">cpf</label>
                    <input type="text" id="cpf" :value="account!.owner!.cpf" disabled="true" />
                </div>
            </fieldset>
            <div v-if="canEdit">
                <button type="button" @click="cancelEdit()">
                    cancel
                </button>
                <button type="submit">
                    save
                </button>
            </div>
            <div v-else>
                <button type="button" @click="setCanEdit(true)">
                    edit
                </button>
            </div>
        </form>
        <div>
            <button type="button" @click="inactivateAccount()">
                inactivate account
            </button>
        </div>
    </div>
</template>