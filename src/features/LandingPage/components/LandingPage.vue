<script setup lang="ts">
import {useAuthStore} from "@features/auth/stores/auth.store";
import {useRouter} from "vue-router";
import {RouteNames} from "@core/router";

const router = useRouter();
const authStore = useAuthStore();

if (authStore.isAuthenticated) {
    router.push({name: RouteNames.Dashboard.Base });
}
</script>

<template>
    <h1>Landing Page</h1>
    <div>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
    </div>
</template>