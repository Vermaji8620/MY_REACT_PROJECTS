const { createSlice } = require("@reduxjs/toolkit");

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // jb hm Product.jsx wale component se item ko pass krrhe hai to isme aake wo 'state', 'action' se kaam krega...
    // simply push krnege to add ho jayega.........aur filter krnge to hatt jayega ----
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
