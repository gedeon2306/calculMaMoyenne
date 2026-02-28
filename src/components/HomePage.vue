<script setup lang="ts">
import { useRouter } from 'vue-router'
import {
  ArrowRight,
  BarChart3,
  Scale,
  FileText,
  Trophy,
  Moon,
  Smartphone,
  Zap,
  Target,
  Lightbulb,
  Lock,
} from 'lucide-vue-next'

const router = useRouter()

const goToCalculator = () => {
  router.push('/calculator')
}
</script>

<template>
  <div class="home-page fade-in">
    <!-- Section Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-badge">
          <img src="/icon.png" alt="" class="hero-icon" />
        </div>
        <h1 class="hero-title">
          CalculMaMoyenne
        </h1>
        <p class="hero-subtitle">
          Calculez vos moyennes scolaires et universitaires de manière simple et intuitive
        </p>
        <p class="hero-description">
          Une application web épurée pour calculer vos moyennes avec coefficients, 
          pourcentages de notes et mentions automatiques.
        </p>
        <button @click="goToCalculator" class="btn btn-primary hero-btn">
          Commencer <ArrowRight :size="18" />
        </button>
      </div>
      <div class="hero-visual">
        <div class="calculator-preview">
          <div class="preview-header">
            <span class="preview-dot"></span>
            <span class="preview-dot"></span>
            <span class="preview-dot"></span>
          </div>
          <div class="preview-content">
            <div class="preview-row">
              <span class="preview-label">Mathématiques</span>
              <span class="preview-value">15.5</span>
            </div>
            <div class="preview-row">
              <span class="preview-label">Français</span>
              <span class="preview-value">12.8</span>
            </div>
            <div class="preview-row">
              <span class="preview-label">Histoire</span>
              <span class="preview-value">14.2</span>
            </div>
            <div class="preview-result">
              <span class="preview-result-label">Moyenne</span>
              <span class="preview-result-value">14.2</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Fonctionnalités -->
    <section class="features">
      <h2 class="section-title">Fonctionnalités</h2>
      <div class="features-grid">
        <div class="feature-card card">
          <div class="feature-icon"><BarChart3 :size="28" stroke-width="1.5" /></div>
          <h3>Calcul en temps réel</h3>
          <p>Vos moyennes se calculent automatiquement à chaque modification de note</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon"><Scale :size="28" stroke-width="1.5" /></div>
          <h3>Gestion des coefficients</h3>
          <p>Attribuez des coefficients différents à chaque matière selon leur importance</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon"><FileText :size="28" stroke-width="1.5" /></div>
          <h3>Notes de classe et examen</h3>
          <p>Distinguer les notes de classe et d'examen avec des pourcentages personnalisables</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon"><Trophy :size="28" stroke-width="1.5" /></div>
          <h3>Mentions automatiques</h3>
          <p>Obtenez automatiquement votre mention selon votre moyenne générale</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon"><Moon :size="28" stroke-width="1.5" /></div>
          <h3>Mode sombre</h3>
          <p>Interface adaptée à vos préférences avec le mode clair et sombre</p>
        </div>
        <div class="feature-card card">
          <div class="feature-icon"><Smartphone :size="28" stroke-width="1.5" /></div>
          <h3>Responsive design</h3>
          <p>Utilisez l'application sur tous vos appareils : mobile, tablette, desktop</p>
        </div>
      </div>
    </section>

    <!-- Section Avantages -->
    <section class="advantages">
      <h2 class="section-title">Pourquoi choisir CalculMaMoyenne ?</h2>
      <div class="advantages-grid">
        <div class="advantage-item">
          <div class="advantage-icon"><Zap :size="24" stroke-width="1.5" /></div>
          <div class="advantage-content">
            <h3>Rapide et efficace</h3>
            <p>Plus besoin de calculs manuels fastidieux, tout est automatisé</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"><Target :size="24" stroke-width="1.5" /></div>
          <div class="advantage-content">
            <h3>Précis et fiable</h3>
            <p>Calculs exacts selon les règles académiques standard</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"><Lightbulb :size="24" stroke-width="1.5" /></div>
          <div class="advantage-content">
            <h3>Intuitif</h3>
            <p>Interface simple et claire, accessible à tous les niveaux</p>
          </div>
        </div>
        <div class="advantage-item">
          <div class="advantage-icon"><Lock :size="24" stroke-width="1.5" /></div>
          <div class="advantage-content">
            <h3>Privé et sécurisé</h3>
            <p>Vos données restent sur votre appareil, aucune information n'est envoyée</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section CTA -->
    <section class="cta">
      <div class="cta-content">
        <h2>Prêt à calculer vos moyennes ?</h2>
        <p>Commencez dès maintenant et obtenez vos résultats instantanément</p>
        <button @click="goToCalculator" class="btn btn-primary">
          Commencer le calcul <ArrowRight :size="18" />
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Section Hero */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 60px 0;
  min-height: 70vh;
}

.hero-content {
  max-width: 500px;
}

.hero-badge {
  margin-bottom: 24px;
}

.hero-icon {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-btn {
  font-size: 1.2rem;
  padding: 16px 32px;
}

/* Preview Calculator */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.calculator-preview {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  border: 1px solid var(--border-color);
  max-width: 400px;
  width: 100%;
  min-width: 300px;
}

.preview-header {
  background: var(--primary-color);
  padding: 14px 20px;
  display: flex;
  gap: 8px;
  align-items: center;
}

.preview-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
}

.preview-content {
  padding: 20px;
}

.preview-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-color);
}

.preview-row:last-child {
  border-bottom: none;
}

.preview-label {
  color: var(--text-color);
  font-weight: 500;
}

.preview-value {
  color: var(--text-color);
  font-weight: 600;
}

.preview-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  margin-top: 12px;
  border-top: 2px solid var(--border-color);
}

.preview-result-label {
  color: var(--text-color);
  font-weight: 700;
  font-size: 1.1rem;
}

.preview-result-value {
  color: var(--success-color);
  font-weight: 800;
  font-size: 1.2rem;
}

/* Section Fonctionnalités */
.features {
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 60px;
  color: var(--text-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
}

.feature-icon {
  margin-bottom: 16px;
  color: var(--primary-color);
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-color);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Section Avantages */
.advantages {
  padding: 80px 0;
  background: var(--surface-color);
  margin: 60px -20px;
  padding: 80px 20px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.advantage-icon {
  flex-shrink: 0;
  color: var(--primary-color);
}

.advantage-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-color);
}

.advantage-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Section CTA */
.cta {
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--text-color);
}

.cta-content p {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive */
@media (max-width: 768px) {
  .home-page {
    padding: 0 15px;
  }
  
  .hero {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .advantage-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .hero-visual {
    padding: 10px;
  }
  
  .calculator-preview {
    max-width: 100%;
    min-width: auto;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .calculator-preview {
    border-radius: 12px;
  }
  
  .preview-content {
    padding: 15px;
  }
  
  .preview-row {
    padding: 6px 0;
  }
  
  .preview-label {
    font-size: 0.9rem;
  }
  
  .preview-value {
    font-size: 0.9rem;
  }
}
</style> 