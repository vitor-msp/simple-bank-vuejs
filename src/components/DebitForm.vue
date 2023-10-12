<script lang="ts">
import { defineComponent } from 'vue';
import type { Debit } from '@/core/domain/Debit';
import { debitUsecase } from '@/factory';


export default defineComponent({
    name: "DebitForm",
    data() {
        const debit: Debit = {
            createdAt: new Date(),
            value: 0
        }
        return { debit }
    },
    methods: {
        async applyDebit() {
            const account = true//accountContext.getAccount();
            if (!account) return;
            const success = true//await debitUsecase.execute(account.accountNumber!, debit);
            if (success) this.$router.push(`/home`);
        }
    }
})
</script>

<template>
    <div>
        <h2>debit</h2>
        <form @submit.prevent="applyDebit()">
            <fieldset>
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="debit.value" min={0.01} step={0.01} required="true" />
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
