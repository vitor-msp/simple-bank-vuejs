<script lang="ts">
import type { Customer } from '@/core/domain/Customer';
import { createAccountUsecase } from '@/factory';
import { defineComponent } from 'vue';

export default defineComponent({
    name: "SignupForm",
    data() {
        const customer: Customer = {
            name: "",
            cpf: "",
        }
        return { customer }
    },
    methods: {
        async signUp() {
            const account = true
            // await createAccountUsecase.execute({
            //     cpf: this.customer.cpf,
            //     name: this.customer.name
            // });
            alert(JSON.stringify(this.customer));
            if (!account) return;
            alert(JSON.stringify(account));
            this.$router.push("/login")
        }
    }
})
</script>

<template>
    <div class="default-form">
        <h2 class="text-3xl mb-3">sign up</h2>
        <form @submit.prevent="signUp()">
            <fieldset class="border border-blue-800 mb-1 p-3">
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" v-model="customer.name" class="p-1" />
                </div>
                <div>
                    <label htmlFor="text">cpf</label>
                    <input type="text" id="cpf" v-model="customer.cpf" class="p-1" />
                </div>
            </fieldset>
            <div class="flex justify-between items-center w-full gap-2">
                <button type="submit" class="bg-blue-800 p-1 text-xl hover:font-bold hover:bg-blue-600 text-gray-100">
                    sign up
                </button>
            </div>
        </form>
    </div>
</template>