import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import des composants de pages
import HomePage from './components/HomePage.vue'
import CalculatorPage from './components/CalculatorPage.vue'

// Configuration des routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/calculator', component: CalculatorPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
