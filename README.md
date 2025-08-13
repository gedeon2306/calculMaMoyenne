# 📊 CalculMaMoyenne

Une application web moderne et intuitive pour calculer vos moyennes scolaires et universitaires avec coefficients et pourcentages personnalisables.

## 🎯 Objectif

CalculMaMoyenne est une **Progressive Web App (PWA)** développée en Vue.js qui permet aux étudiants de calculer facilement leurs moyennes avec :
- ✅ Gestion des coefficients par matière
- ✅ Distinction entre notes de classe et d'examen
- ✅ Calculs en temps réel
- ✅ Attribution automatique des mentions
- ✅ Interface responsive et moderne
- ✅ Mode sombre/clair
- ✅ SEO optimisé (meta tags, Open Graph, Twitter Card, sitemap, robots)
- ✅ PWA installable (popup d’installation + bouton « Installer »)
- ✅ Offline basique via Service Worker

## ✨ Fonctionnalités

### 🏠 Page d'accueil
- **Présentation** de l'application avec description claire
- **Bouton "Commencer"** pour accéder au calculateur
- **Sections** fonctionnalités et avantages
- **Preview** du calculateur en action
- **Design responsive** et moderne

### 🧮 Page de calcul
- **Configuration des pourcentages** : note de classe vs note d'examen
- **Tableau interactif** avec :
  - Saisie des noms de matières
  - Notes de classe (0-20) avec validation
  - Notes d'examen (0-20) avec validation
  - Coefficients personnalisables
  - Calcul automatique des notes finales
- **Ajout/suppression** de matières dynamiquement
- **Calculs en temps réel** avec formule :
  ```
  Note finale = (Note de classe × %classe + Note d'examen × %examen) × Coefficient
  ```
- **Moyenne générale** avec pondération par coefficients
- **Mentions automatiques** :
  - < 10 : Ajourné 🔴
  - 10-11.99 : Passable 🟡
  - 12-13.99 : Assez Bien 🟢
  - 14-15.99 : Bien 🟢
  - 16-17.99 : Très Bien 🟢
  - ≥ 18 : Excellent 🟢
- **Coloration dynamique** selon la performance
- **Bouton Reset** pour tout effacer

### 🎨 Interface utilisateur
- **Mode clair/sombre** avec toggle dans la navbar
- **Menu hamburger** sur mobile (fermeture auto au scroll/clic navigation)
- **Animation** hamburger ↔ croix
- **Animations** et transitions douces

### 📲 PWA & Installation
- **Popup d’installation** automatique (événement `beforeinstallprompt`)
- **Bouton "Installer"** dans la navbar et le menu mobile
- **Service Worker** pour cache offline basique
- **Icônes PWA** au format PNG + SVG, support "maskable"

## 🛠️ Technologies utilisées

| Composant         | Technologie                 |
|-------------------|-----------------------------|
| Framework         | Vue.js 3 (Composition API)  |
| Langage           | TypeScript                  |
| Routing           | Vue Router 4                |
| Build Tool        | Vite                        |
| Styling           | CSS pur avec variables CSS  |
| State Management  | Vue reactive refs           |
| PWA               | Service Worker + Manifest   |
| SEO               | Meta tags, robots.txt, sitemap.xml |

## 📦 Installation et développement

### Prérequis
- Node.js (16+ recommandé)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone https://github.com/gedeon2306/calculMaMoyenne.git
cd calculmamoyenne

# Installer les dépendances
npm install

# (optionnel) Si les icônes PWA ne s'affichent pas sur mobile,
# convertir les PNG (si postinstall n'a pas tourné)
node scripts/fix-icons.mjs

# Lancer en développement (le popup PWA peut ne pas apparaître en dev)
npm run dev

# Build + preview (recommandé pour tester la PWA et le popup d’installation)
npm run build
npm run preview
```

## 🏗️ Structure du projet

```
calculmamoyenne/
├── public/
│   ├── logo.svg                  # Logo SVG principal
│   ├── logo-192.png              # Logo PNG 192x192 (favicon/PWA)
│   ├── logo-512.png              # Logo PNG 512x512 (réseaux sociaux/PWA)
│   ├── manifest.json             # Manifeste PWA (maskable icons)
│   ├── robots.txt                # Directives pour les crawlers
│   ├── sitemap.xml               # Sitemap pour l’indexation
│   └── sw.js                     # Service Worker (offline/cache)
├── scripts/
│   └── fix-icons.mjs             # Conversion PNG data URI -> binaire
├── src/
│   ├── components/
│   │   ├── HomePage.vue          # Page d'accueil avec présentation
│   │   └── CalculatorPage.vue    # Page de calcul avec tableau interactif
│   ├── App.vue                   # Layout + navbar + popup d’installation
│   ├── main.ts                   # Router + enregistrement Service Worker
│   └── style.css                 # Styles globaux et variables CSS
├── index.html                    # SEO (meta/OG/Twitter) + Schema.org
├── package.json                  # Dépendances + scripts (postinstall)
├── vite.config.ts                # Configuration Vite optimisée
├── tsconfig.json                 # Config TypeScript racine
├── tsconfig.app.json             # Config TypeScript app
├── tsconfig.node.json            # Config TypeScript node
└── README.md                     # Documentation
```

## 🚀 Déploiement

### Vercel
1. Importer le repo dans Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Variables: aucune requise

### Netlify
1. New site from Git > sélectionner le repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Rediriger toutes les routes (SPA): créer `_redirects` dans `dist` avec `/* /index.html 200`

### GitHub Pages
1. `npm run build`
2. Pousser le dossier `dist` vers la branche `gh-pages`
3. Activer GitHub Pages sur `gh-pages`
4. SPA fallback: ajouter un `404.html` copié de `index.html`

## 📸 Captures d’écran
- À ajouter dans un dossier `docs/screenshots/` et référencer ici (exemples):
  - `docs/screenshots/home-light.png`
  - `docs/screenshots/calculator-dark.png`

## 🔎 Audit Lighthouse
```bash
# Avec Chrome DevTools > Lighthouse
# Vérifiez: Performance, Accessibility, Best Practices, SEO, PWA
```
Conseils:
- Compresser les images
- Vérifier `manifest.json` et Service Worker actifs
- Vérifier le contraste (mode sombre)

## 🚀 PWA / Installation sur appareil

### Android (Chrome)
- Ouvrez l’app buildée (`npm run preview` ou prod)
- Le **popup d’installation** peut apparaître automatiquement
- Sinon, utilisez le **bouton "Installer"** (navbar/menu mobile)

### iOS (Safari)
- Pas de popup d’installation
- Partager > **Sur l’écran d’accueil**

### Notes
- Le popup n’apparaît pas si l’app est déjà installée
- Plus fiable en build/preview qu’en dev

## 🔍 SEO
- Meta tags (title, description, keywords)
- Open Graph & Twitter Card
- Canonical URL
- `public/robots.txt` et `public/sitemap.xml`

## 🧪 Dépannage

### Le popup d’installation ne s’affiche pas
- `npm run build && npm run preview`
- DevTools > Application > Service Workers: "This page is controlled by a service worker"
- Onglet Manifest: icônes 192/512 valides
- Désinstaller l’app si déjà installée
- Cliquer sur le bouton **Installer** (navbar/menu)

### Le logo n’apparaît pas après installation
- Exécuter: `node scripts/fix-icons.mjs`
- Rebuild: `npm run build`
- Désinstaller/réinstaller l’app

### Scroll horizontal / responsive
- Corrigé: `overflow-x: hidden`, `hero-visual` responsive

## 🎨 Design System

### Couleurs
- Primaire: `#667eea`
- Secondaire: `#764ba2`
- Succès: `#48bb78`
- Avertissement: `#ed8936`
- Erreur: `#f56565`

### Typographie
- Segoe UI, Tahoma, Geneva, Verdana, sans-serif

## 🤝 Contribution
1. Fork du projet
2. Branche feature (`git checkout -b feature/AmazingFeature`)
3. Commits (`git commit -m 'Add some AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Pull Request

## 📄 Licence
Ce projet est sous licence MIT.

---

**CalculMaMoyenne** - Simplifiez vos calculs de moyennes ! 🎓
