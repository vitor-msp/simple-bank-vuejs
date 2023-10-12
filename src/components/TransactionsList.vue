<script lang="ts">
import type { TransactionOutput } from '@/core/gateways/IHttpGateway';
import type { AccountOutput } from "@/core/gateways/IHttpGateway"
import { getTransactionsUsecase } from '@/factory';
import { Account } from '@/mapping';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "TransactionsList",
    data() {
        const transactions: TransactionOutput[] = []
        return { transactions }
    },
    props: {
        loggedAccount: {
            type: Account,
            required: true
        }
    },
    methods: {
        async getTransactions() {
            const response = await getTransactionsUsecase.execute(
                this.loggedAccount.account!.accountNumber!
            );
            if (response) this.transactions = response.transactions;
        },
        getTransferMessage(sender: AccountOutput, recipient: AccountOutput) {
            if (this.loggedAccount.account!.accountNumber === sender.accountNumber) {
                return "sended to >>";
            }
            if (this.loggedAccount.account!.accountNumber === recipient.accountNumber) {
                return "received from <<";
            }
        },
        getTransferAccountNumber(sender: AccountOutput, recipient: AccountOutput) {
            if (this.loggedAccount.account!.accountNumber === sender.accountNumber) {
                return recipient.accountNumber;
            }
            if (this.loggedAccount.account!.accountNumber === recipient.accountNumber) {
                return sender.accountNumber;
            }
        },
        getTransferName(sender: AccountOutput, recipient: AccountOutput) {
            if (this.loggedAccount.account!.accountNumber === sender.accountNumber) {
                return recipient.name;
            }
            if (this.loggedAccount.account!.accountNumber === recipient.accountNumber) {
                return sender.name;
            }
        },
        getTransactionCSSClasses(transaction: TransactionOutput) {
            return `font-bold ${transaction.value.toString().includes("-") ? "text-red-600" : "text-green-600"}`
        }
    }
})
</script>

<template>
    <div class="mb-8">
        <div v-if="transactions.length === 0" class="flex justify-center items-center w-full gap-4 mt-4">
            <button type="button" @click="getTransactions()"
                class="w-auto rounded-md transition-all hover:bg-blue-800 py-2 px-4 text-xl hover:font-bold bg-blue-600 text-gray-100">
                show transactions
            </button>
        </div>
        <div class="flex justify-center items-center w-full gap-4 mt-4">
            <ul class="w-3/5">
                <li v-for="transaction in transactions" :key="transaction.createdAt.getTime()"
                    class="rounded-md hover:bg-blue-200">
                    <div class="flex justify-evenly items-center w-full gap-4 mt-4 p-4">
                        <span class="font-bold">{{ transaction.type }}</span>
                        <span :class="getTransactionCSSClasses(transaction)">
                            {{ transaction.value }}
                        </span>
                        <span>{{ transaction.createdAt.toDateString() }}</span>
                        <div v-if="transaction.sender && transaction.recipient"
                            className="flex justify-center evenly items-center w-full gap-4 mt-4 p-4">
                            <div>
                                <span className="font-bold text-blue-800"> {{ getTransferMessage(transaction.sender,
                                    transaction.recipient) }} </span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div>
                                    <span className="font-semibold"> account number: </span>
                                    <span className="ml-2"> {{ getTransferAccountNumber(transaction.sender,
                                        transaction.recipient) }} </span>
                                </div>
                                <div>
                                    <span className="font-semibold"> name: </span>
                                    <span className="ml-2"> {{ getTransferName(transaction.sender, transaction.recipient) }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
