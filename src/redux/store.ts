import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		// one: oneSlice.reducer,
		// two: twoSlice.reducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
