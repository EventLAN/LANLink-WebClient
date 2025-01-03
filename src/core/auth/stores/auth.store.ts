import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = computed(() => token.value !== null)
    const token = ref<string | null>(null)
    
    // logs the user in on startup if they have a token (token may or may not be valid)
    if (localStorage.getItem('LANLink_user_token')) {
      token.value = localStorage.getItem('LANLink_user_token')
    }

    function login() {
      token.value = 'XXXXXXXXXXXXXXXXXXXXX'
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