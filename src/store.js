import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Importation du reducer du slice

const store = configureStore({
    reducer: {
        users: userReducer // Configuration du store avec le reducer
    }
});

export default store;