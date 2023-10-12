import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import HomeView from '../views/HomeView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import CreditView from '@/views/CreditView.vue'
import DebitView from '@/views/DebitView.vue'
import TransferView from '@/views/TransferView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: LoginView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/my-account',
      name: 'myaccount',
      component: MyAccountView
    },
    {
      path: '/credit',
      name: 'credit',
      component: CreditView
    },
    {
      path: '/debit',
      name: 'debit',
      component: DebitView
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: TransferView
    }
  ]
})

export default router
