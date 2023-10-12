<script lang="ts">
import { defineComponent } from 'vue';
import LogOut from './LogOut.vue';

export default defineComponent({
    name: "NavBar",
    data() {
        return { isLoggedIn: false }
    },
    components: { LogOut }
})
</script>

<template>
    <nav v-if="isLoggedIn">
        <RouterLink to="/home">home</RouterLink>
        <RouterLink to="/my-account">my account</RouterLink>
        <LogOut />
    </nav>
    <nav v-else>
        <RouterLink to="/login">login</RouterLink>
        <RouterLink to="/sign-up">sign up</RouterLink>
    </nav>
</template>
