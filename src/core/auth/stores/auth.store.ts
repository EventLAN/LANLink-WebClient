import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useHttpStore } from '@core/http/store/httpclient.store'

export const useAuthStore = defineStore('auth', () => {
    const httpClient = useHttpStore();
    const isAuthenticated = computed(() => token.value !== null)
    const token = ref<string | null>(null)
    
    // logs the user in on startup if they have a token (token may or may not be valid)
    if (localStorage.getItem('LANLink_user_token')) {
      token.value = localStorage.getItem('LANLink_user_token')
    }

    async function login(): Promise<void> {
      try {
        const data = await (await httpClient.post('/auth/login', { username: 'XXXXX', password: 'XXXXX' })).json();
        if(data.token) {
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
    }

    return { 
        isAuthenticated,
        token,
        login,
        logout
    }
  })