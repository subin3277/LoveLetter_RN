import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import user from './user';

const rootReducer = combineReducers({
  user
})

const store = configureStore({reducer : rootReducer});

export default store;