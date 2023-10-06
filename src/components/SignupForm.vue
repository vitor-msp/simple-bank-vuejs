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
    <div>
        <h2>sign up</h2>
        <form @submit.prevent="signUp()">
            <fieldset>
                <div>
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" v-model="customer.name" />
                </div>
                <div>
                    <label htmlFor="text">cpf</label>
                    <input type="text" id="cpf" v-model="customer.cpf" />
                </div>
            </fieldset>
            <div>
                <button type="submit">
                    sign up
                </button>
            </div>
        </form>
    </div>
</template>