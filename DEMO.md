# 🎯 Démonstration - CalculMaMoyenne

## 🚀 Lancement de l'application

Une fois l'application lancée avec `npm run dev`, vous accédez à :

**URL :** http://localhost:3000

## 📱 Interface utilisateur

### 🏠 Page d'accueil
- **Titre** : "CalculMaMoyenne" avec gradient coloré
- **Description** : Présentation claire de l'application
- **Bouton "Commencer"** : Redirige vers le calculateur
- **Sections** : Fonctionnalités et avantages
- **Preview** : Aperçu du calculateur en action

### 🧮 Page calculateur
- **Configuration** : Pourcentages classe/examen
- **Tableau interactif** : Saisie des notes et coefficients
- **Résultats** : Moyenne et mention en temps réel
- **Actions** : Ajouter/supprimer matières, reset

## 🎨 Fonctionnalités détaillées

### 1. Configuration des pourcentages
```
Pourcentage note de classe : 40%
Pourcentage note d'examen : 60%
```
- Validation automatique (doit faire 100%)
- Messages d'erreur/succès en temps réel

### 2. Tableau des matières
| Matière | Note classe | Note examen | Coeff | Note finale |
|---------|-------------|-------------|-------|-------------|
| Mathématiques | 15.5 | 16.2 | 4 | 15.92 |
| Français | 12.8 | 13.1 | 3 | 12.98 |
| Histoire-Géo | 14.2 | 13.8 | 2 | 13.96 |
| Sciences | 11.5 | 12.3 | 3 | 12.02 |

### 3. Calculs automatiques
**Formule :** `Note finale = (Note classe × %classe + Note examen × %examen) × Coefficient`

**Exemple :**
- Mathématiques : (15.5 × 0.4 + 16.2 × 0.6) × 4 = 15.92
- Moyenne générale : 13.72
- Mention : "Assez Bien"

### 4. Coloration dynamique
- 🔴 **Rouge** : Moyenne < 10 (Ajourné)
- 🟡 **Jaune** : Moyenne < 12 (Passable)
- 🟢 **Vert** : Moyenne ≥ 12 (Assez Bien et plus)

### 5. Mode sombre/clair
- **Toggle** : Bouton 🌙/☀️ dans la navbar
- **Transition** : Animation douce entre les modes
- **Persistance** : Mémorise le choix utilisateur

## 🎯 Exemples d'utilisation

### Exemple 1 : Lycée
```
Configuration : 40% classe, 60% examen
Matières :
- Mathématiques : 14/16 (coeff 4)
- Français : 12/13 (coeff 3)
- Histoire : 11/12 (coeff 2)
- Sciences : 13/14 (coeff 3)
Résultat : Moyenne 13.45 - "Assez Bien"
```

### Exemple 2 : Université
```
Configuration : 30% classe, 70% examen
Matières :
- Algorithmes : 15/17 (coeff 4)
- Base de données : 13/14 (coeff 3)
- Programmation : 16/18 (coeff 4)
- Mathématiques : 12/13 (coeff 2)
Résultat : Moyenne 15.23 - "Bien"
```

## 🔧 Fonctionnalités avancées

### Ajout de matières
- **Bouton "+"** : Ajoute une nouvelle ligne
- **Nom automatique** : "Matière X"
- **Coefficient par défaut** : 1
- **Notes à zéro** : Prêtes à saisir

### Suppression de matières
- **Bouton "🗑️"** : Supprime la ligne
- **Protection** : Impossible de supprimer la dernière matière
- **Recalcul automatique** : Moyenne mise à jour

### Reset complet
- **Bouton "🔄 Reset"** : Remet tout à zéro
- **Configuration par défaut** : 4 matières de base
- **Pourcentages** : 40%/60%

## 📱 Responsive design

### Desktop (> 768px)
- **Layout** : Grille complète
- **Tableau** : Toutes les colonnes visibles
- **Navigation** : Horizontale

### Mobile (< 768px)
- **Layout** : Colonne unique
- **Tableau** : Scroll horizontal
- **Navigation** : Adaptée aux petits écrans
- **Boutons** : Taille optimisée pour le touch

## 🎨 Thèmes

### Mode clair
- **Fond** : Blanc (#ffffff)
- **Texte** : Gris foncé (#1a202c)
- **Accents** : Bleu-violet (#667eea)

### Mode sombre
- **Fond** : Gris très foncé (#1a202c)
- **Texte** : Blanc cassé (#f7fafc)
- **Accents** : Même bleu-violet (#667eea)

## 🚀 Performance

- **Calculs** : Temps réel avec Vue.js watchers
- **Rendu** : Optimisé avec computed properties
- **CSS** : Variables CSS pour les thèmes
- **Bundle** : Code splitté avec Vite

## 📊 Validation

- **Notes** : 0-20 uniquement
- **Coefficients** : Nombres positifs
- **Pourcentages** : Doivent faire 100%
- **Messages** : Erreurs claires et informatifs

---

**CalculMaMoyenne** - Votre assistant pour les calculs de moyennes ! 🎓 