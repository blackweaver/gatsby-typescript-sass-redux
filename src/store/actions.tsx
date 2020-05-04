export const TOGGLE_DARKMODE = 'TOGGLE_DARKMODE';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'ADD_ITEM';

export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE, isDarkMode
});

export const addItem = counter => (
  { type: ADD_ITEM, counter }
);

export const removeItem = counter => (
  { type: REMOVE_ITEM, counter }
);