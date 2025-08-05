<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode')
}

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <h1>CalculMaMoyenne</h1>
        </div>
        <div class="nav-links">
          <button @click="navigateTo('/')" class="nav-link">Accueil</button>
          <button @click="navigateTo('/calculator')" class="nav-link">Calculateur</button>
        </div>
        <div class="nav-actions">
          <button @click="toggleDarkMode" class="theme-toggle">
            <span v-if="!isDarkMode">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.navbar {
  background: var(--primary-color);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand h1 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-color);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background: var(--hover-color);
  transform: translateY(-2px);
}

.theme-toggle {
  background: var(--secondary-color);
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--hover-color);
  transform: scale(1.1);
}

.main-content {
  min-height: calc(100vh - 70px);
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }
  
  .nav-brand h1 {
    font-size: 1.2rem;
  }
  
  .nav-links {
    gap: 10px;
  }
  
  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
