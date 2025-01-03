<script setup lang="ts">
import {useAuthStore} from "@features/auth/stores/auth.store";
import {useRouter} from "vue-router";

const router = useRouter();
const authStore = useAuthStore();

if (authStore.isAuthenticated) {
    router.push({name: 'UserDashboard'});
}

function register() {
    authStore.login();
    router.push({name: 'LandingPage'});
}
</script>

<template>
    <h1>Register</h1>
    <button @click="register">Register</button>
</template>

<style scoped>
</style>