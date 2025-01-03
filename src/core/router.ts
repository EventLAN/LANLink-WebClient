import { createWebHistory, createRouter } from 'vue-router'
import { useAuthStore } from '@core/auth/stores/auth.store'

export const RouteNames = {
  LandingPage: 'LandingPage',
  Login: 'Login',
  Register: 'Register',
  Dashboard: {
    Base: 'Dashboard',
    Children: {
      User: 'UserDashboard',
    }
  },
  NotFound: 'NotFound',
}

const routes = [
  { 
    path: '/', name: RouteNames.LandingPage, component: () => import('@features/LandingPage/components/LandingPage.vue') 
  },
  {
    path: '/login', name: RouteNames.Login, component: () => import('@core/auth/components/Login.vue')
  },
  {
    path: '/register', name: RouteNames.Register, component: () => import('@core/auth/components/Register.vue')
  },
  {
    path: '/dashboard', name: RouteNames.Dashboard.Base, component: () => import('@features/Dashboard/components/Dashboards.vue'),
    redirect: { name: RouteNames.Dashboard.Children.User },
    children: [
      {
        path: 'user', name: RouteNames.Dashboard.Children.User, component: () => import('@features/Dashboard/components/UserDashboard.vue')
      },
    ]
  },

  { path: '/:pathMatch(.*)*', name: RouteNames.NotFound, component: () => import('@core/NotFound/components/NotFound.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (
    (
      to.name !== RouteNames.LandingPage &&
      to.name !== RouteNames.Login &&
      to.name !== RouteNames.Register &&
      to.name !== RouteNames.NotFound
    ) 
    && !authStore.isAuthenticated) next({ name: 'LandingPage' })
  else next()
})