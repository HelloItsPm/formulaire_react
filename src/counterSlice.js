// src/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Création du slice pour le compteur
const counterSlice = createSlice({
  name: 'counter', // Nom du slice
  initialState: {
    value: 0 // État initial du compteur
  },
  reducers: {
    // Réducteur pour incrémenter le compteur
    increment: (state) => {
      state.value += 1; // Augmente la valeur du compteur de 1
    },
    // Réducteur pour décrémenter le compteur
    decrement: (state) => {
      state.value -= 1; // Diminue la valeur du compteur de 1
    },
    // Réducteur pour incrémenter le compteur d'un montant spécifique
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Augmente la valeur du compteur du montant spécifié dans action.payload
    }
  }
});

// Exportation des actions générées automatiquement pour pouvoir les dispatcher dans les composants
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Exportation du réducteur pour l'intégrer dans le store
export default counterSlice.reducer;