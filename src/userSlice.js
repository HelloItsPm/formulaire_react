import { createSlice } from '@reduxjs/toolkit';

// Fonction pour charger les utilisateurs depuis le localStorage
const loadUsersFromLocalStorage = () => {
    try {
        // Tenter de récupérer les utilisateurs stockés sous la clé 'users'
        const serializedState = localStorage.getItem('users');
        // Si des utilisateurs sont trouvés, les parser en JSON, sinon retourner un tableau vide
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        // En cas d'erreur lors de la récupération/parsing, afficher une erreur dans la console et retourner un tableau vide
        console.error('Could not load users from localStorage', e);
        return [];
    }
};

// Fonction pour enregistrer les utilisateurs dans le localStorage
const saveUsersToLocalStorage = (users) => {
    try {
        // Sérialiser les utilisateurs en JSON
        const serializedState = JSON.stringify(users);
        // Stocker les utilisateurs sérialisés sous la clé 'users'
        localStorage.setItem('users', serializedState);
    } catch (e) {
        // En cas d'erreur lors de la sérialisation/stockage, afficher une erreur dans la console
        console.error('Could not save users to localStorage', e);
    }
};

// Création d'un slice Redux pour les utilisateurs
const userSlice = createSlice({
    name: 'users', // Nom du slice
    initialState: loadUsersFromLocalStorage(), // État initial chargé depuis le localStorage
    reducers: {
        // Réducteur pour ajouter un utilisateur
        addUser: (state, action) => {
            // Ajouter l'utilisateur à l'état
            state.push(action.payload);
            // Enregistrer les utilisateurs mis à jour dans le localStorage
            saveUsersToLocalStorage(state);
        }
    }
});

// Exportation de l'action addUser pour pouvoir la dispatcher dans les composants
export const { addUser } = userSlice.actions;

// Exportation du réducteur pour l'intégrer dans le store
export default userSlice.reducer;
