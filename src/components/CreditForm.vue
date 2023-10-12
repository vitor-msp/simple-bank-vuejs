<script lang="ts">
import type { Credit } from '@/core/domain/Credit';
// import { creditUsecase } from '@/factory';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CreditForm",
    data() {
        const credit: Credit = {
            createdAt: new Date(),
            value: 0
        }
        return { credit }
    },
    methods: {
        async applyCredit() {
            const account = true//accountContext.getAccount();
            if (!account) return;
            const success = true//await creditUsecase.execute(account.accountNumber!, credit);
            if (success) this.$router.push(`/home`);
        }
    }
})
</script>

<template>
    <div>
        <h2>credit</h2>
        <form @submit.prevent="applyCredit()">
            <fieldset>
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="credit.value" min={0.01} step={0.01} required="true" />
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
