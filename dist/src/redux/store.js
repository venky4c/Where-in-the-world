// There are three things we need:

//     an actual store to hold the state
//     an action to dispatch intent
//     a reducer to handle that intent

import { createStore } from "redux";
import rootReducer from "./reducers";

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);
console.log(`Jsooooooon returns ${JSON.parse(persistedTheme)}`);
let initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(rootReducer, initialState);

store.subscribe(() => {
  const preferences = store.getState().preferences;
  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

export default store;
