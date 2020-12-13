import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../common/Layout/Layout'
import {FREQUENCY} from '../../utils/constants';
import { createPayment } from '../../state/payments';

import Button from '../../common/Button/Button'

import styles from './Add.module.scss'

const Add = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [startDate, setStartDate] = useState('')
  const [frequency, setFrequency] = useState('')

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
      <h2 className={styles.title}>Enter your details</h2>
      <p className={styles.description}>Keep track of your household spending by adding your bills</p>
      <div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="number"
            placeholder="Amount"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div>
          <input
            className={`${styles.input} ${startDate === '' && styles.datepickerNoContent}`}
            type="date"
            placeholder="Start date"
            name="startdate"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <select
            className={styles.select}
            data-testid="frequency"
            name="frequency"
            id="frequency"
            value={frequency}
            onChange={e => setFrequency(e.target.value)}
          >
            <option value="">Frequency</option>
            <option value={FREQUENCY.WEEKLY}>Every week</option>
            <option value={FREQUENCY.MONTHLY}>Every month</option>
            <option value={FREQUENCY.ANNUALLY}>Every year</option>
          </select>
        </div>
        <div>
          <Button
            className={styles.button}
            disabled={!formReady}
            onClick={handleAddPaymentClick}
          >
            Add new payment
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Add
