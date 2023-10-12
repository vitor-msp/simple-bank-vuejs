<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "LogOut",
    data() {
        return {}
    },
    methods: {
        logout() {
            // accountContext.logout();
        }
    }
})
</script>

<template>
    <button type="button" @click="logout()">
        logout
    </button>
</template>
