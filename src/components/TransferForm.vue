<script lang="ts">
import type { Account } from '@/core/domain/Account';
import type { Transfer } from '@/core/domain/Transfer';
import type { AccountOutput, PostTransferInput } from '@/core/gateways/IHttpGateway';
import { getAccountsUsecase } from '@/factory';
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
    mounted() {
        (async () => {
            const myAccount: Account = {}//accountContext.getAccount();
            if (!myAccount) return;
            const response: AccountOutput[] = [{ accountNumber: 111, name: "fulano" }]
            //await getAccountsUsecase.execute();
            const newAccounts = response.filter(
                ({ accountNumber }) => accountNumber !== myAccount.accountNumber
            );
            this.accounts = newAccounts
        })()
    },
    methods: {
        async applyTransfer() {
            if (!this.IsFormValid()) {
                alert("The recipient's account cannot be empty.");
                return;
            }
            const account = true//accountContext.getAccount();
            if (!account) return;
            const success = true
            //     await transferUsecase.execute(
            //     account.accountNumber!,
            //     transfer
            // );
            if (success) this.$router.push(`/home`);
        },
        IsFormValid(): boolean {
            return this.transfer.recipientAccountNumber > 0 && this.transfer.value > 0;
        }
    }
})
</script>

<template>
    <div>
        <h2>transfer</h2>
        <form @submit.prevent="applyTransfer()">
            <fieldset>
                <div>
                    <label htmlFor="recipientAccountNumber">recipient account</label>
                    <select id="recipientAccountNumber" required="true" v-model="transfer.recipientAccountNumber">
                        <option value="-1">{{ " - " }}</option>
                        <option v-for="account in accounts" :key="account.accountNumber" :value="account.accountNumber">
                            {{ account.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="transfer.value" min={0.01} step={0.01} required="true" />
                </div>
            </fieldset>
            <div>
                <button type="submit">
                    apply
                </button>
            </div>
        </form>
    </div>
</template>
