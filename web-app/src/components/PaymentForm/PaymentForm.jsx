import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {FREQUENCY, COLOR} from '../../utils/constants'

import Button from '../../common/Button/Button'
import Input from '../../common/Input/Input'
import Select from '../../common/Select/Select'

import styles from './PaymentForm.module.scss'
import { Payment } from '../../propTypes/payment'

export const FORM_MODE = Object.freeze({
  ADD: 'add',
  EDIT: 'edit'
})

const PaymentForm = ({
  mode = FORM_MODE.ADD,
  onDeleteClick,
  onSaveClick,
  payment,
}) => {
  const [name, setName] = useState(payment.name || '')
  const [amount, setAmount] = useState(payment.amount || '')
  const [startDate, setStartDate] = useState(payment.startDate || '')
  const [frequency, setFrequency] = useState(payment.frequency || '')

  const formReady = (
    name !== '' &&
    amount !== '' && !isNaN(amount) &&
    startDate !== '' &&
    frequency !== ''
  )

  const handleSaveClick = () => {
    onSaveClick({
      name,
      amount,
      startDate,
      frequency,
      ...(payment.id ? {id: payment.id} : {})
    })
  }

  const handleDeleteClick = () => {
    payment.id && onDeleteClick(payment.id)
  }

  return (
    <div>
      <div>
        {
          mode === FORM_MODE.EDIT && 
          <label
            className={styles.label}
            htmlFor="name" className={styles.label}
          >Name</label>
        }
        <Input          
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        {
          mode === FORM_MODE.EDIT && 
          <label
            className={styles.label}
            htmlFor="amount" className={styles.label}
          >Amount</label>
        }
        <Input
          type="number"
          placeholder="Amount"
          name="amount"
          id="amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      </div>
      <div>
        {
          mode === FORM_MODE.EDIT && 
          <label
            className={styles.label}
            htmlFor="startDate" className={styles.label}
          >Name</label>
        }
        <Input
          className={startDate === '' ? styles.datepickerNoContent : ''}
          type="date"
          placeholder="Start date"
          name="startdate"
          id="startDate"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
      </div>
      <div>
        {
          mode === FORM_MODE.EDIT && 
          <label
            className={styles.label}
            htmlFor="frequency" className={styles.label}
          >Frequency</label>
        }
        <Select
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
        </Select>
      </div>
      <div>
        <Button
          className={styles.button}
          disabled={!formReady}
          onClick={handleSaveClick}
          color={COLOR.ACCEPT}
        >
          {mode === FORM_MODE.EDIT ? 'Save' : 'Add new payment'}
        </Button>
        {
          mode === FORM_MODE.EDIT && (
            <Button
              className={styles.buttonDelete}
              onClick={handleDeleteClick}
              color={COLOR.CAUTION}
            >
              Delete
            </Button>
          )
        }
      </div>
    </div>
  )
}

PaymentForm.propTypes = {
  mode: PropTypes.oneOf([FORM_MODE.ADD, FORM_MODE.EDIT]),
  payment: PropTypes.shape(Payment),
  onDeleteClick: PropTypes.func,
  onSaveClick: PropTypes.func
}

PaymentForm.defaultProps = {
  mode: FORM_MODE.ADD,
  payment: {},
  onDeleteClick: () => {},
  onSaveClick: () => {}
}


export default PaymentForm
