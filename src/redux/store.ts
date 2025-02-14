import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import orderReducer from "./slices/orderSlice";
import clothingReducer from './slices/clothingSlice';
import salesReducer from "./slices/salesSlice";



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: orderReducer,
    clothing: clothingReducer,
    sales: salesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
import { useDispatch } from 'react-redux';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
