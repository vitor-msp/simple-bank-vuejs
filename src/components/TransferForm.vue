<script lang="ts">
import type { AccountOutput, PostTransferInput } from '@/core/gateways/IHttpGateway';
import { getAccountsUsecase, transferUsecase } from '@/factory';
import { Account } from '@/mapping';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TransferForm",
    data() {
        const transfer: PostTransferInput = {
            value: 0,
            recipientAccountNumber: 0,
        }
        const accounts: AccountOutput[] = []
        return { transfer, accounts }
    },
    props: {
        loggedAccount: {
            type: Account,
            required: true
        }
    },
    mounted() {
        (async () => {
            const accounts: AccountOutput[] = await getAccountsUsecase.execute();
            this.accounts = accounts.filter(
                ({ accountNumber }) => accountNumber !== this.loggedAccount.account!.accountNumber
            );
        })()
    },
    methods: {
        async applyTransfer() {
            if (!this.IsFormValid()) {
                alert("The recipient's account cannot be empty.");
                return;
            }
            const success = await transferUsecase.execute(
                this.loggedAccount.account!.accountNumber!,
                this.transfer
            );
            if (success) this.$router.push(`/home`);
        },
        IsFormValid(): boolean {
            return this.transfer.recipientAccountNumber > 0 && this.transfer.value > 0;
        }
    }
})
</script>

<template>
    <div class="default-form">
        <h2 class="text-3xl mb-3">transfer</h2>
        <form @submit.prevent="applyTransfer()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="recipientAccountNumber">recipient account</label>
                    <select id="recipientAccountNumber" required="true" v-model="transfer.recipientAccountNumber"
                        class="p-1">
                        <option value="-1">{{ " - " }}</option>
                        <option v-for="account in accounts" :key="account.accountNumber" :value="account.accountNumber">
                            {{ account.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="transfer.value" min={0.01} step={0.01} required="true"
                        class="p-1" />
                </div>
            </fieldset>
            <div class="flex justify-between items-center w-full gap-2">
                <button type="submit" class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    apply
                </button>
            </div>
        </form>
    </div>
</template>
