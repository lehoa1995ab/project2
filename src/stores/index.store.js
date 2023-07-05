import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counter.slice';
import productReducer from "./slices/product.slice";
import cartReducer from "./slices/cart.slice";
import userLoginReducer from "./slices/userLogin.slice";

const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        productStore: productReducer,
        userLoginStore : userLoginReducer,
        cartStore: cartReducer,
    }
});

export default store;
