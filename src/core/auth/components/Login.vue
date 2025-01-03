<script setup lang="ts">
import {useAuthStore} from "@features/auth/stores/auth.store";
import {useRouter} from "vue-router";
import {RouteNames} from "@core/router";

const router = useRouter();
const authStore = useAuthStore();

if (authStore.isAuthenticated) {
    router.push({name: RouteNames.Dashboard.Base });
}

function login() {
    authStore.login();
    router.push({name: RouteNames.Dashboard.Base });
}
</script>

<template>
    <h1>Login</h1>
    <button @click="login">Login</button>
</template>

<style scoped>
</style>