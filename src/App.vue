<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDarkMode = ref(false)
const isMobileMenuOpen = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-mode')
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const navigateTo = (path: string) => {
  router.push(path)
  isMobileMenuOpen.value = false // Fermer le menu après navigation
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
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
        
        <!-- Menu desktop -->
        <div class="nav-links desktop-menu">
          <button @click="navigateTo('/')" class="nav-link">Accueil</button>
          <button @click="navigateTo('/calculator')" class="nav-link">Calculateur</button>
        </div>
        
        <!-- Actions desktop -->
        <div class="nav-actions desktop-menu">
          <button @click="toggleDarkMode" class="theme-toggle">
            <span v-if="!isDarkMode">🌙</span>
            <span v-else>☀️</span>
          </button>
        </div>
        
        <!-- Bouton hamburger mobile -->
        <button @click="toggleMobileMenu" class="mobile-menu-toggle">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
      
      <!-- Menu mobile -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <button @click="navigateTo('/')" class="mobile-nav-link">Accueil</button>
          <button @click="navigateTo('/calculator')" class="mobile-nav-link">Calculateur</button>
          <div class="mobile-actions">
            <button @click="toggleDarkMode" class="mobile-theme-toggle">
              <span v-if="!isDarkMode">🌙 Mode sombre</span>
              <span v-else>☀️ Mode clair</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Overlay pour fermer le menu mobile -->
    <div 
      v-if="isMobileMenuOpen" 
      class="mobile-overlay" 
      @click="closeMobileMenu"
    ></div>

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

/* Menu hamburger */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--text-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* Menu mobile */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: var(--primary-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.mobile-menu-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.mobile-nav-link {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 8px;
  text-align: left;
  transition: all 0.3s ease;
  font-weight: 500;
}

.mobile-nav-link:hover {
  background: var(--hover-color);
}

.mobile-actions {
  border-top: 1px solid var(--border-color);
  padding-top: 15px;
  margin-top: 10px;
}

.mobile-theme-toggle {
  background: var(--secondary-color);
  border: none;
  color: var(--text-color);
  font-size: 1rem;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 8px;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease;
}

.mobile-theme-toggle:hover {
  background: var(--hover-color);
}

/* Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }
  
  .nav-brand h1 {
    font-size: 1.2rem;
  }
  
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .main-content {
    padding: 15px;
  }
}

@media (min-width: 769px) {
  .mobile-menu-toggle {
    display: none;
  }
  
  .mobile-menu {
    display: none;
  }
}

/* Animation hamburger */
.mobile-menu-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}
</style>
