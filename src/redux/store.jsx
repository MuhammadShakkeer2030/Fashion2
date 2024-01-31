import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/reducer';

// Create a Redux store with an initial state and your reducers
const store = configureStore({
    reducer: rootReducer,
});

export default store;
