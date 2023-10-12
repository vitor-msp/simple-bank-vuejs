<script lang="ts">
import type { GetTransactionsOutput, TransactionOutput } from '@/core/gateways/IHttpGateway';
import type { AccountOutput } from "@/core/gateways/IHttpGateway"
import { getTransactionsUsecase } from '@/factory';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TransactionsList",
    data() {
        const transactions: TransactionOutput[] = []
        return { transactions, currentAccountNumber: 111 }
    },
    methods: {
        async getTransactions() {
            const account = true//await accountContext.getAccount();
            if (!account) return;
            const response: GetTransactionsOutput = {
                transactions: [
                    { createdAt: new Date(), type: 'credit', value: 15 },
                    { createdAt: new Date(), type: 'debit', value: 7.69 },
                    {
                        createdAt: new Date(), type: 'transfer', value: 19.36,
                        sender: { accountNumber: 111, name: "fulano" }, recipient: { accountNumber: 222, name: "ciclano" }
                    }]
            }
            //await getTransactionsUsecase.execute(
            //     account.accountNumber!
            // );
            if (response) this.transactions = response.transactions;
        },
        getTransferMessage(sender: AccountOutput, recipient: AccountOutput) {
            if (this.currentAccountNumber === sender.accountNumber) {
                return "sended to >>";
            }
            if (this.currentAccountNumber === recipient.accountNumber) {
                return "received from <<";
            }
        },
        getTransferAccountNumber(sender: AccountOutput, recipient: AccountOutput) {
            if (this.currentAccountNumber === sender.accountNumber) {
                return recipient.accountNumber;
            }
            if (this.currentAccountNumber === recipient.accountNumber) {
                return sender.accountNumber;
            }
        },
        getTransferName(sender: AccountOutput, recipient: AccountOutput) {
            if (this.currentAccountNumber === sender.accountNumber) {
                return recipient.name;
            }
            if (this.currentAccountNumber === recipient.accountNumber) {
                return sender.name;
            }
        },
    }
})
</script>

<template>
    <div>
        <div v-if="transactions.length === 0">
            <button type="button" @click="getTransactions()">
                show transactions
            </button>
        </div>
        <div>
            <ul>
                <li v-for="transaction in transactions" :key="transaction.createdAt.getTime()">
                    <div>
                        <span>{{ transaction.type }}</span>
                        <br>
                        <span>
                            {{ transaction.value }}
                        </span>
                        <br>
                        <span>{{ transaction.createdAt.toDateString() }}</span>
                        <div v-if="transaction.sender && transaction.recipient">
                            <div>
                                <span> {{ getTransferMessage(transaction.sender, transaction.recipient) }} </span>
                            </div>
                            <div>
                                <div>
                                    <span> account number: </span>
                                    <span> {{ getTransferAccountNumber(transaction.sender, transaction.recipient) }} </span>
                                </div>
                                <div>
                                    <span> name: </span>
                                    <span> {{ getTransferName(transaction.sender, transaction.recipient) }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
