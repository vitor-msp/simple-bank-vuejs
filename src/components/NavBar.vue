<script lang="ts">
import { defineComponent } from 'vue';
import LogOut from './LogOut.vue';

export default defineComponent({
    name: "NavBar",
    components: { LogOut },
    props: {
        isLoggedIn: {
            type: Boolean,
            required: true
        }
    }
})
</script>

<template>
    <nav v-if="isLoggedIn" class="flex justify-evenly items-center w-full text-gray-100 font-bold bg-blue-800">
        <RouterLink to="/home" class="hover:bg-gray-100 hover:text-blue-800 w-max p-2 text-center">home</RouterLink>
        <RouterLink to="/my-account" class="hover:bg-gray-100 hover:text-blue-800 w-max p-2 text-center">my account
        </RouterLink>
        <LogOut />
    </nav>
    <nav v-else class="flex justify-evenly items-center w-full text-gray-100 font-bold bg-blue-800">
        <RouterLink to="/login" class="hover:bg-gray-100 hover:text-blue-800 w-max p-2 text-center">login</RouterLink>
        <RouterLink to="/sign-up" class="hover:bg-gray-100 hover:text-blue-800 w-max p-2 text-center">sign up
        </RouterLink>
    </nav>
</template>
