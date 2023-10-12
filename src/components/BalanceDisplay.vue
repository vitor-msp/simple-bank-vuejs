<script lang="ts">
import type { GetBalanceOutput } from '@/core/gateways/IHttpGateway';
import { getBalanceUsecase } from '@/factory';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BalanceDisplay",
    data() {
        let balance: number = 0;
        return { balance }
    },
    mounted() {
        (async () => {
            const account = true//await accountContext.getAccount();
            if (!account) return;
            const response: GetBalanceOutput = { balance: 15 }//await getBalanceUsecase.execute(account.accountNumber!);
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
