import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 5
  },
  reducers: {
    CartReducer: (state, action) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { CartReducer } = cartSlice.actions

export default cartSlice.reducer