import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import paymentsAPI from '../api/payments'

export const createPayment = createAsyncThunk(
  'payments/createPayment',
  async (payment) => await paymentsAPI.createPayment(payment)
)

export const getPayments = createAsyncThunk(
  'payments/getPayments',
  async() => await paymentsAPI.getPayments()
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
      state = [...state, action.payload]
    },
    [getPayments.fulfilled]: (state, action) => {
      state = action.payload
      return state
    }
  }
})

const { actions, reducer } = paymentsSlice
export const { updatePayment, deletePayment } = actions
export default reducer
