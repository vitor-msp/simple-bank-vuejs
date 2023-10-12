<script lang="ts">
import { defineComponent } from 'vue';
import type { Debit } from '@/core/domain/Debit';
import { debitUsecase } from '@/factory';
import { Account } from '@/mapping';


export default defineComponent({
    name: "DebitForm",
    data() {
        const debit: Debit = {
            createdAt: new Date(),
            value: 0
        }
        return { debit }
    },
    props: {
        loggedAccount: {
            type: Account,
            required: true
        }
    },
    methods: {
        async applyDebit() {
            const success = await debitUsecase
                .execute(this.loggedAccount.account!.accountNumber!, this.debit);
            if (success) this.$router.push(`/home`);
        }
    }
})
</script>

<template>
    <div class="default-form">
        <h2 class="text-3xl mb-3">debit</h2>
        <form @submit.prevent="applyDebit()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="debit.value" min="0.01" step="0.01" required="true"
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
