import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../common/Layout/Layout'
import {FREQUENCY} from './constants';
import { createPayment } from '../../state/payments';

const Add = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [startDate, setStartDate] = useState('')
  const [frequency, setFrequency] = useState('weekly')

  const formReady = (
    name !== '' &&
    amount !== '' && !isNaN(amount) &&
    startDate !== '' &&
    frequency !== ''
  )

  const handleAddPaymentClick = () => {
    dispatch(createPayment({
      name,
      amount,
      startDate,
      frequency
    }))
  }

  return (
    <Layout title="Add A Bill">
      <h2>Enter your details</h2>
      <p>Keep track of your household spending by adding your bills</p>
      <div>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Start dates (DD/MM/YYYY)"
            name="startdate"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="frequency">Frequency</label>
          <select
            name="frequency"
            id="frequency"
            value={frequency}
            onChange={e => setFrequency(e.target.value)}
          >
            <option value={FREQUENCY.WEEKLY}>Every week</option>
            <option value={FREQUENCY.MONTHLY}>Every month</option>
            <option value={FREQUENCY.ANNUALLY}>Every year</option>
          </select>
        </div>
        <div>
          <button
            disabled={!formReady}
            onClick={handleAddPaymentClick}
          >
            Add new payment
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Add
