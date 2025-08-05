<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Types
interface Subject {
  id: number
  name: string
  classNote: number
  examNote: number
  coefficient: number
  finalNote: number
}

interface Settings {
  classPercentage: number
  examPercentage: number
}

// État réactif
const subjects = ref<Subject[]>([
  { id: 1, name: 'Mathématiques', classNote: 0, examNote: 0, coefficient: 4, finalNote: 0 },
  { id: 2, name: 'Français', classNote: 0, examNote: 0, coefficient: 3, finalNote: 0 },
  { id: 3, name: 'Histoire-Géo', classNote: 0, examNote: 0, coefficient: 2, finalNote: 0 },
  { id: 4, name: 'Sciences', classNote: 0, examNote: 0, coefficient: 3, finalNote: 0 }
])

const settings = ref<Settings>({
  classPercentage: 40,
  examPercentage: 60
})

const nextSubjectId = ref(5)

// Computed properties
const totalCoefficient = computed(() => {
  return subjects.value.reduce((sum, subject) => sum + subject.coefficient, 0)
})

const weightedSum = computed(() => {
  return subjects.value.reduce((sum, subject) => {
    return sum + (subject.finalNote * subject.coefficient)
  }, 0)
})

const average = computed(() => {
  if (totalCoefficient.value === 0) return 0
  return weightedSum.value / totalCoefficient.value
})

const mention = computed(() => {
  const avg = average.value
  if (avg < 10) return { text: 'Ajourné', color: 'error' }
  if (avg < 12) return { text: 'Passable', color: 'warning' }
  if (avg < 14) return { text: 'Assez Bien', color: 'success' }
  if (avg < 16) return { text: 'Bien', color: 'success' }
  if (avg < 18) return { text: 'Très Bien', color: 'success' }
  return { text: 'Excellent', color: 'success' }
})

const averageColor = computed(() => {
  const avg = average.value
  if (avg < 10) return 'error'
  if (avg < 12) return 'warning'
  return 'success'
})

// Méthodes
const calculateFinalNote = (subject: Subject) => {
  const classWeight = settings.value.classPercentage / 100
  const examWeight = settings.value.examPercentage / 100
  
  const weightedClassNote = subject.classNote * classWeight
  const weightedExamNote = subject.examNote * examWeight
  
  subject.finalNote = Math.round((weightedClassNote + weightedExamNote) * 100) / 100
}

const updateAllCalculations = () => {
  subjects.value.forEach(calculateFinalNote)
}

const addSubject = () => {
  const newSubject: Subject = {
    id: nextSubjectId.value++,
    name: `Matière ${subjects.value.length + 1}`,
    classNote: 0,
    examNote: 0,
    coefficient: 1,
    finalNote: 0
  }
  subjects.value.push(newSubject)
}

const removeSubject = (index: number) => {
  if (subjects.value.length > 1) {
    subjects.value.splice(index, 1)
  }
}

const addCoefficient = () => {
  // Ajouter une nouvelle colonne de coefficient (logique à implémenter selon les besoins)
  subjects.value.forEach(subject => {
    // Pour l'instant, on ajoute juste un coefficient par défaut
    // Cette fonction peut être étendue selon les besoins spécifiques
  })
}

const removeCoefficient = (index: number) => {
  // Logique pour supprimer un coefficient
  // Pour l'instant, on ne fait rien car les coefficients sont liés aux matières
}

const resetAll = () => {
  subjects.value = [
    { id: 1, name: 'Mathématiques', classNote: 0, examNote: 0, coefficient: 4, finalNote: 0 },
    { id: 2, name: 'Français', classNote: 0, examNote: 0, coefficient: 3, finalNote: 0 },
    { id: 3, name: 'Histoire-Géo', classNote: 0, examNote: 0, coefficient: 2, finalNote: 0 },
    { id: 4, name: 'Sciences', classNote: 0, examNote: 0, coefficient: 3, finalNote: 0 }
  ]
  settings.value = { classPercentage: 40, examPercentage: 60 }
  nextSubjectId.value = 5
}

const validateNumber = (value: string): number => {
  const num = parseFloat(value)
  return isNaN(num) ? 0 : Math.max(0, Math.min(20, num))
}

// Watchers pour recalculer automatiquement
watch(() => settings.value.classPercentage, updateAllCalculations)
watch(() => settings.value.examPercentage, updateAllCalculations)

watch(subjects, () => {
  subjects.value.forEach(subject => {
    watch(() => subject.classNote, () => calculateFinalNote(subject))
    watch(() => subject.examNote, () => calculateFinalNote(subject))
    watch(() => subject.coefficient, () => calculateFinalNote(subject))
  })
}, { deep: true })

// Initialisation
updateAllCalculations()
</script>

<template>
  <div class="calculator-page fade-in">
    <div class="calculator-header">
      <h1>Calculateur de Moyennes</h1>
      <p>Calculez vos moyennes avec coefficients et pourcentages personnalisables</p>
    </div>

    <!-- Configuration des pourcentages -->
    <div class="settings-section card">
      <h2>Configuration des pourcentages</h2>
      <div class="percentage-inputs">
        <div class="input-group">
          <label for="classPercentage">Pourcentage note de classe (%)</label>
          <input
            id="classPercentage"
            v-model.number="settings.classPercentage"
            type="number"
            min="0"
            max="100"
            class="input"
            @input="updateAllCalculations"
          />
        </div>
        <div class="input-group">
          <label for="examPercentage">Pourcentage note d'examen (%)</label>
          <input
            id="examPercentage"
            v-model.number="settings.examPercentage"
            type="number"
            min="0"
            max="100"
            class="input"
            @input="updateAllCalculations"
          />
        </div>
      </div>
      <div class="percentage-validation">
        <span v-if="settings.classPercentage + settings.examPercentage !== 100" class="error-text">
          ⚠️ La somme des pourcentages doit être égale à 100%
        </span>
        <span v-else class="success-text">
          ✅ Pourcentages valides
        </span>
      </div>
    </div>

    <!-- Tableau des matières -->
    <div class="table-section card">
      <div class="table-header">
        <h2>Notes et Coefficients</h2>
        <div class="table-actions">
          <button @click="addSubject" class="btn btn-secondary">
            ➕ Ajouter une matière
          </button>
          <button @click="resetAll" class="btn btn-secondary">
            🔄 Reset
          </button>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>Matière</th>
              <th>Note de classe</th>
              <th>Note d'examen</th>
              <th>Coefficient</th>
              <th>Note finale</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(subject, index) in subjects" :key="subject.id">
              <td>
                <input
                  v-model="subject.name"
                  type="text"
                  class="input subject-name"
                  placeholder="Nom de la matière"
                />
              </td>
              <td>
                <input
                  v-model.number="subject.classNote"
                  type="number"
                  min="0"
                  max="20"
                  step="0.01"
                  class="input note-input"
                  placeholder="0-20"
                />
              </td>
              <td>
                <input
                  v-model.number="subject.examNote"
                  type="number"
                  min="0"
                  max="20"
                  step="0.01"
                  class="input note-input"
                  placeholder="0-20"
                />
              </td>
              <td>
                <input
                  v-model.number="subject.coefficient"
                  type="number"
                  min="0"
                  step="0.1"
                  class="input coefficient-input"
                  placeholder="Coeff"
                />
              </td>
              <td>
                <span class="final-note" :class="`note-${averageColor}`">
                  {{ subject.finalNote.toFixed(2) }}
                </span>
              </td>
              <td>
                <button
                  @click="removeSubject(index)"
                  class="btn-remove"
                  :disabled="subjects.length <= 1"
                >
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Résultats -->
    <div class="results-section card">
      <h2>Résultats</h2>
      <div class="results-grid">
        <div class="result-item">
          <h3>Total des coefficients</h3>
          <p class="result-value">{{ totalCoefficient }}</p>
        </div>
        <div class="result-item">
          <h3>Somme pondérée</h3>
          <p class="result-value">{{ weightedSum.toFixed(2) }}</p>
        </div>
        <div class="result-item main-result">
          <h3>Moyenne générale</h3>
          <p class="result-value" :class="`result-${averageColor}`">
            {{ average.toFixed(2) }}
          </p>
        </div>
        <div class="result-item">
          <h3>Mention</h3>
          <p class="result-value" :class="`result-${mention.color}`">
            {{ mention.text }}
          </p>
        </div>
      </div>
    </div>

    <!-- Informations -->
    <div class="info-section card">
      <h2>Comment ça marche ?</h2>
      <div class="info-content">
        <p>
          <strong>Formule de calcul :</strong><br>
          Note finale = (Note de classe × %classe + Note d'examen × %examen) × Coefficient
        </p>
        <p>
          <strong>Moyenne générale :</strong><br>
          Moyenne = Somme des (Notes finales × Coefficients) ÷ Total des coefficients
        </p>
        <div class="mention-guide">
          <h3>Guide des mentions :</h3>
          <ul>
            <li>< 10 : <span class="error-text">Ajourné</span></li>
            <li>10-11.99 : <span class="warning-text">Passable</span></li>
            <li>12-13.99 : <span class="success-text">Assez Bien</span></li>
            <li>14-15.99 : <span class="success-text">Bien</span></li>
            <li>16-17.99 : <span class="success-text">Très Bien</span></li>
            <li>≥ 18 : <span class="success-text">Excellent</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calculator-page {
  max-width: 1200px;
  margin: 0 auto;
}

.calculator-header {
  text-align: center;
  margin-bottom: 40px;
}

.calculator-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--text-color);
}

.calculator-header p {
  font-size: 1.1rem;
  color: var(--text-secondary);
}

/* Section Configuration */
.settings-section {
  margin-bottom: 30px;
}

.settings-section h2 {
  margin-bottom: 20px;
  color: var(--text-color);
}

.percentage-inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-color);
}

.percentage-validation {
  text-align: center;
  font-weight: 600;
}

.error-text {
  color: var(--error-color);
}

.success-text {
  color: var(--success-color);
}

/* Section Tableau */
.table-section {
  margin-bottom: 30px;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.table-header h2 {
  color: var(--text-color);
  margin: 0;
}

.table-actions {
  display: flex;
  gap: 10px;
}

.table-container {
  overflow-x: auto;
}

.table {
  min-width: 800px;
}

.subject-name {
  min-width: 150px;
}

.note-input {
  width: 80px;
  text-align: center;
}

.coefficient-input {
  width: 80px;
  text-align: center;
}

.final-note {
  font-weight: 700;
  font-size: 1.1rem;
  text-align: center;
  display: block;
}

.note-error {
  color: var(--error-color);
}

.note-warning {
  color: var(--warning-color);
}

.note-success {
  color: var(--success-color);
}

.btn-remove {
  background: var(--error-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-remove:hover:not(:disabled) {
  transform: scale(1.1);
}

.btn-remove:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Section Résultats */
.results-section {
  margin-bottom: 30px;
}

.results-section h2 {
  margin-bottom: 20px;
  color: var(--text-color);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.result-item {
  text-align: center;
  padding: 20px;
  background: var(--background-color);
  border-radius: 8px;
  border: 2px solid var(--border-color);
}

.result-item.main-result {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
}

.result-item h3 {
  font-size: 1rem;
  margin-bottom: 10px;
  color: inherit;
}

.result-value {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
}

.result-error {
  color: var(--error-color);
}

.result-warning {
  color: var(--warning-color);
}

.result-success {
  color: var(--success-color);
}

/* Section Informations */
.info-section h2 {
  margin-bottom: 20px;
  color: var(--text-color);
}

.info-content p {
  margin-bottom: 15px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.mention-guide {
  margin-top: 20px;
  padding: 15px;
  background: var(--background-color);
  border-radius: 8px;
  border: 1px solid var(--border-color);
}

.mention-guide h3 {
  margin-bottom: 10px;
  color: var(--text-color);
}

.mention-guide ul {
  list-style: none;
  padding: 0;
}

.mention-guide li {
  margin-bottom: 5px;
  color: var(--text-secondary);
}

.warning-text {
  color: var(--warning-color);
}

/* Responsive */
@media (max-width: 768px) {
  .calculator-header h1 {
    font-size: 2rem;
  }
  
  .percentage-inputs {
    grid-template-columns: 1fr;
  }
  
  .table-header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .table-actions {
    justify-content: center;
  }
  
  .results-grid {
    grid-template-columns: 1fr;
  }
  
  .table {
    font-size: 0.9rem;
  }
  
  .note-input,
  .coefficient-input {
    width: 60px;
  }
}
</style> 