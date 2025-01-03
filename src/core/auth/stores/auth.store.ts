import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useHttpStore } from '@core/http/stores/httpclient.store'
import type { AuthDto } from '@core/http/dtos/AuthDto';

export const useAuthStore = defineStore('auth', () => {
    const httpClient = useHttpStore();
    const isAuthenticated = computed(() => token.value !== null)
    const token = ref<string | null>(null)
    
    // logs the user in on startup if they have a token (token may or may not be valid)
    if (localStorage.getItem('LANLink_user_token')) {
      token.value = localStorage.getItem('LANLink_user_token')
    }

    async function login(username: string, password: string): Promise<void> {
      try {
        const data = await httpClient.post<AuthDto>('/auth/login', { username, password });
        if(data && data.token) {
          token.value = data.token
          localStorage.setItem('LANLink_user_token', data.token)
        }
        Promise.resolve();
      } catch (error) {
        Promise.reject(error);
      }
    }

    function logout() {
      token.value = null;
      localStorage.removeItem('LANLink_user_token')
    }

    return { 
        isAuthenticated,
        token,
        login,
        logout
    }
  })