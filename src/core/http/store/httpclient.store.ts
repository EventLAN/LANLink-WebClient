import { defineStore } from 'pinia'
import { useAuthStore } from '../../auth/stores/auth.store';

export const useHttpStore = defineStore('http', () => {
    const authStore = useAuthStore();
    const baseUrl = import.meta.env.SERVER_BASE_URL

    function createHeaders(): Headers {
        var headers: Headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        
        if(authStore.isAuthenticated)
            headers.append('Authorization', 'Bearer ' + authStore.token);

        return headers;
    }

    async function get(endpoint: string) {
        const response = await fetch(baseUrl + endpoint, {
            method: 'GET',
            headers: createHeaders()
        });
        if (response.status === 401 && authStore.isAuthenticated) {
            authStore.logout();
        }
        return response;
    }

    async function post(endpoint: string, data: any) {
        const response = await fetch(baseUrl + endpoint, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify(data)
        });
        if (response.status === 401 && authStore.isAuthenticated) {
            authStore.logout();
        }
        return response;
    }

    async function put(endpoint: string, data: any) {
        const response = await fetch(baseUrl + endpoint, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify(data)
        });
        if (response.status === 401 && authStore.isAuthenticated) {
            authStore.logout();
        }
        return response;
    }

    async function del(endpoint: string) {
        const response = await fetch(baseUrl + endpoint, {
            method: 'DELETE',
            headers: createHeaders(),
        });
        if (response.status === 401 && authStore.isAuthenticated) {
            authStore.logout();
        }
        return response;
    }

    return { get, post, put, del }
})