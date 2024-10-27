import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if(existingItem) {
        existingItem.quantity += 1;
      }
      else {
        state.items.push({...action.payload , quantity: 1}); // use {} to add an object
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // ensure that the state is updated with the new quantity and not only in the action object.
    updateQuantity: (state, action) => {
      const {name , quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if(itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
