import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import accountSlice from "../features/account/accountSlice";

export default configureStore({
  reducer: {
    products: productsSlice,
    account: accountSlice,
  },
});
