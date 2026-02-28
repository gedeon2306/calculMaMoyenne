<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { Menu, X, Sun, Moon, Download } from 'lucide-vue-next'

const router = useRouter()
const isDarkMode = ref(false)
const isMobileMenuOpen = ref(false)

// PWA install prompt
const deferredPrompt = ref<any | null>(null)
const isInstallPromptVisible = ref(false)

const isStandalone = computed(() => {
  // iOS Safari uses navigator.standalone, others use display-mode
  const isIosStandalone = // @ts-ignore
    typeof window !== 'undefined' && (window.navigator as any).standalone === true
  const isDisplayModeStandalone =
    typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(display-mode: standalone)').matches
  return isIosStandalone || isDisplayModeStandalone
})

const canInstall = computed(() => !!deferredPrompt.value && !isStandalone.value)

const onBeforeInstallPrompt = (event: any) => {
  event.preventDefault()
  deferredPrompt.value = event
  if (!isStandalone.value) {
    isInstallPromptVisible.value = true
  }
}

const onAppInstalled = () => {
  deferredPrompt.value = null
  isInstallPromptVisible.value = false
}

const installApp = async () => {
  if (!deferredPrompt.value) return
  deferredPrompt.value.prompt()
  deferredPrompt.value = null
  isInstallPromptVisible.value = false
}

const dismissInstall = () => {
  isInstallPromptVisible.value = false
}

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

// Fermer le menu au scroll
const handleScroll = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false
  }
}

// Mount/unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.addEventListener('appinstalled', onAppInstalled)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
  window.removeEventListener('appinstalled', onAppInstalled)
})
</script>

<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">
          <img src="/icon.png" alt="CalculMaMoyenne" class="nav-logo" />
          <span class="nav-brand-text">CalculMaMoyenne</span>
        </router-link>
        
        <!-- Menu desktop -->
        <div class="nav-links desktop-menu">
          <button @click="navigateTo('/')" class="nav-link">Accueil</button>
          <button @click="navigateTo('/calculator')" class="nav-link">Calculateur</button>
        </div>
        
        <!-- Actions desktop -->
        <div class="nav-actions desktop-menu">
          <button v-if="canInstall" @click="installApp" class="install-btn">
            <Download :size="18" /> Installer
          </button>
          <button @click="toggleDarkMode" class="theme-toggle" :aria-label="isDarkMode ? 'Mode clair' : 'Mode sombre'">
            <Moon v-if="!isDarkMode" :size="20" />
            <Sun v-else :size="20" />
          </button>
        </div>
        
        <!-- Bouton hamburger mobile -->
        <button @click="toggleMobileMenu" class="mobile-menu-toggle" aria-label="Menu">
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
      
      <!-- Menu mobile -->
      <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <button @click="navigateTo('/')" class="mobile-nav-link">Accueil</button>
          <button @click="navigateTo('/calculator')" class="mobile-nav-link">Calculateur</button>
          <div class="mobile-actions">
            <button v-if="canInstall" @click="installApp" class="mobile-theme-toggle">
              <Download :size="18" /> Installer l'app
            </button>
            <button @click="toggleDarkMode" class="mobile-theme-toggle">
              <template v-if="!isDarkMode"><Moon :size="18" /> Mode sombre</template>
              <template v-else><Sun :size="18" /> Mode clair</template>
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

    <!-- Popup d'installation PWA -->
    <div v-if="isInstallPromptVisible && !isStandalone" class="install-popup">
      <div class="install-card">
        <div class="install-content">
          <div class="install-text">
            <h3>Installer CalculMaMoyenne</h3>
            <p>Accédez plus vite à l'application, même hors-ligne.</p>
          </div>
          <div class="install-actions">
            <button class="btn btn-secondary" @click="dismissInstall">Plus tard</button>
            <button class="btn btn-primary" @click="installApp">Installer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background: var(--surface-color);
  border-bottom: 1px solid var(--border-color);
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

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--text-color);
}
.nav-logo {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.nav-brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
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

.install-btn {
  background: var(--surface-color);
  color: var(--text-color);
  border: 2px solid var(--border-color);
  padding: 8px 12px;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.install-btn:hover {
  background: var(--hover-color);
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

/* Install popup */
.install-popup {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1100;
  padding: 0 15px;
}

.install-card {
  max-width: 640px;
  width: 100%;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

.install-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
}

.install-text h3 {
  margin: 0 0 6px 0;
  color: var(--text-color);
}

.install-text p {
  margin: 0;
  color: var(--text-secondary);
}

.install-actions {
  display: flex;
  gap: 10px;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }
  
  .nav-brand-text {
    font-size: 1.1rem;
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
  
  .install-content {
    flex-direction: column;
    align-items: stretch;
  }
  
  .install-actions {
    justify-content: flex-end;
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
</style>
