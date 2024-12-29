import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false)
    
    function login() {
      isAuthenticated.value = true
    }

    function logout() {
      isAuthenticated.value = false
    }

    return { 
        isAuthenticated,
        login,
        logout
    }
  })