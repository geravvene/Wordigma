import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user/user.slice.js';

const store = configureStore({
  reducer: { userReducer },
  devTools: true,
});

export default store;
