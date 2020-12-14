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

export const getPayment = createAsyncThunk(
  'payments/getPayment',
  async(paymentId) => await paymentsAPI.getPayment(paymentId)
)

export const updatePayment = createAsyncThunk(
  'payments/updatePayment',
  async(payment) => await paymentsAPI.updatePayment(payment)
)

export const deletePayment = createAsyncThunk(
  'payments/deletePayment',
  async(paymentId) => await paymentsAPI.deletePayment(paymentId)
)

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: {},
  extraReducers: {
    [createPayment.fulfilled]: (state, action) => {
      state[action.payload.id] = action.payload
    },
    [getPayments.fulfilled]: (state, action) => {
      state = action.payload.reduce((acc, payment) => {
        acc[payment.id] = payment;
        return acc;
      }, {})
      
      return state
    },
    [getPayment.fulfilled]: (state, action) => {
      state[action.payload.id] = action.payload
    },
    [updatePayment.fulfilled]: (state, action) => {
      state[action.payload.id] = action.payload
    },
    [deletePayment.fulfilled]: (state, action) => {
      delete state[action.payload]
      return state;
    }
  }
})

export const getPaymentByIdSelector = id => state => state.payments[id];
export const getPaymentsSelector = state => Object.values(state.payments)

const { reducer } = paymentsSlice
export default reducer
