<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LogOut",
    methods: {
        logout() {
            location.replace("/login")
        }
    }
})
</script>

<template>
    <button type="button" @click="logout()" class="hover:bg-gray-100 hover:text-blue-800 w-max p-2 text-center">
        logout
    </button>
</template>
