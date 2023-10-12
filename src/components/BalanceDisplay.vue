<script lang="ts">
import { getBalanceUsecase } from '@/factory';
import { Account } from '@/mapping';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BalanceDisplay",
    data() {
        let balance: number = 0;
        return { balance }
    },
    props: {
        loggedAccount: {
            type: Account,
            required: true
        }
    },
    mounted() {
        (async () => {
            const response = await getBalanceUsecase.execute(this.loggedAccount.account!.accountNumber!);
            if (response) this.balance = response.balance;
        })();
    }
})
</script>

<template>
    <div class="flex justify-center my-6">
        <span class="text-3xl">Balance:</span>
        <span class="text-3xl mx-2 text-blue-800 font-bold">
            {{ balance.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
            }) }}
        </span>
    </div>
</template>
