import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import paymentsAPI from '../api/payments'

export const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (payment) => {
    const response = await paymentsAPI.createPayment(payment)
    return response;
  }
)

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    updatePayment: (state, action) => console.log(action.payload),
    deletePayment: (state, action) => console.log(action.payload),
  },
  extraReducers: {
    [createPayment.fulfilled]: (state, action) => {
      state.push(action.payload)
    }
  }
})

const { actions, reducer } = paymentsSlice
export const { updatePayment, deletePayment } = actions
export default reducer
