import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            console.log(state); //we can not print state by this in console
            console.log(current(state)); //to print state in console.
            state.items.length = 0;
        },
    },
    
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;