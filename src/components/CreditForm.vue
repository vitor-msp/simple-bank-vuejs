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
    <div class="default-form">
        <h2 class="text-3xl mb-3">credit</h2>
        <form @submit.prevent="applyCredit()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="value">value</label>
                    <input type="number" id="value" v-model="credit.value" min="0.01" step="0.01" required="true"
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
