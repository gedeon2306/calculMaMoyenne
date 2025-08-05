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
- ✅ SEO optimisé
- ✅ Logo personnalisé

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
- **Design responsive** (mobile, tablette, desktop)
- **Animations douces** et transitions
- **Validation en temps réel** des saisies
- **Interface intuitive** et accessible

## 🛠️ Technologies utilisées

| Composant         | Technologie                 |
|-------------------|-----------------------------|
| Framework         | Vue.js 3 (Composition API)  |
| Language          | TypeScript                  |
| Routing           | Vue Router 4                |
| Build Tool        | Vite                        |
| Styling           | CSS pur avec variables CSS  |
| State Management  | Vue reactive refs           |
| PWA               | Manifest + Service Worker   |
| SEO               | Meta tags optimisés         |

## 📦 Installation et développement

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [https://github.com/gedeon2306/calculMaMoyenne.git]
cd calculmamoyenne

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
# Développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 🏗️ Structure du projet

```
calculmamoyenne/
├── src/
│   ├── components/
│   │   ├── HomePage.vue          # Page d'accueil avec présentation
│   │   └── CalculatorPage.vue    # Page de calcul avec tableau interactif
│   ├── assets/                   # Ressources statiques
│   ├── App.vue                   # Composant racine avec navigation
│   ├── main.ts                   # Point d'entrée avec configuration router
│   └── style.css                 # Styles globaux et variables CSS
├── public/
│   ├── logo.svg                  # Logo SVG principal
│   ├── logo-192.png              # Logo PNG 192x192 (favicon, PWA)
│   ├── logo-512.png              # Logo PNG 512x512 (réseaux sociaux)
│   ├── manifest.json             # Manifeste PWA
│   └── vite.svg                  # Logo Vite (ancien)
├── index.html                    # Template HTML avec SEO optimisé
├── package.json                  # Dépendances et scripts
├── vite.config.ts                # Configuration Vite optimisée
├── tsconfig.json                 # Configuration TypeScript
├── tsconfig.app.json             # Config TypeScript pour l'app
├── tsconfig.node.json            # Config TypeScript pour Node
├── .gitignore                    # Fichiers ignorés par Git
└── README.md                     # Documentation complète
```

## 🚀 Déploiement PWA

### Configuration PWA
L'application est **PWA ready** avec :
- ✅ **Manifeste** : `public/manifest.json`
- ✅ **Icônes** : SVG + PNG (192x192, 512x512)
- ✅ **Meta tags** : Open Graph, Twitter Card
- ✅ **SEO optimisé** : Description, keywords, canonical

### Build pour production
```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers optimisés pour la production.

## 🎯 Fonctionnalités techniques

### Calculs
- **Validation des entrées** : uniquement nombres entre 0 et 20
- **Calculs en temps réel** avec watchers Vue.js
- **Précision décimale** : 2 chiffres après la virgule
- **Gestion des erreurs** : validation des pourcentages

### Performance
- **Lazy loading** des composants
- **Optimisation des re-renders** avec computed properties
- **CSS optimisé** avec variables CSS pour les thèmes
- **Responsive design** avec media queries
- **Preconnect** pour les ressources externes

### Accessibilité
- **Navigation au clavier** supportée
- **Contraste adapté** pour les modes clair/sombre
- **Labels appropriés** pour les inputs
- **Messages d'erreur** clairs et informatifs

### SEO
- **Meta tags** optimisés pour le référencement
- **Open Graph** pour les réseaux sociaux
- **Twitter Card** pour Twitter
- **Canonical URL** pour éviter le contenu dupliqué
- **Keywords** ciblées pour le calcul de moyennes

## 📱 Compatibilité

- **Navigateurs** : Chrome, Firefox, Safari, Edge (versions récentes)
- **Appareils** : Desktop, tablette, mobile
- **Systèmes** : Windows, macOS, Linux, iOS, Android
- **PWA** : Installation possible sur tous les appareils

## 🔧 Personnalisation

### Thèmes
Les couleurs et styles sont définis dans `src/style.css` avec des variables CSS :
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background-color: #ffffff;
  --text-color: #1a202c;
  /* ... autres variables */
}
```

### Logo
Le logo est disponible en plusieurs formats :
- **SVG** : `public/logo.svg` (favicon principal)
- **PNG 192x192** : `public/logo-192.png` (PWA, favicon)
- **PNG 512x512** : `public/logo-512.png` (réseaux sociaux)

### Ajout de fonctionnalités
Pour ajouter de nouvelles fonctionnalités :
1. Créer un nouveau composant dans `src/components/`
2. Ajouter la route dans `src/main.ts`
3. Mettre à jour la navigation dans `src/App.vue`

## 🎨 Design System

### Couleurs
- **Primaire** : #667eea (bleu-violet)
- **Secondaire** : #764ba2 (violet)
- **Succès** : #48bb78 (vert)
- **Avertissement** : #ed8936 (orange)
- **Erreur** : #f56565 (rouge)

### Typographie
- **Famille** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Tailles** : Responsive avec rem
- **Poids** : 400 (normal), 600 (semi-bold), 700 (bold), 800 (extra-bold)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

Développé avec ❤️ pour simplifier le calcul des moyennes scolaires.

---

**CalculMaMoyenne** - Simplifiez vos calculs de moyennes ! 🎓
