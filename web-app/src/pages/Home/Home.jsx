import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../common/Button/Button'
import Layout from '../../common/Layout/Layout'
import PaymentsList from '../../components/PaymentsList/PaymentsList'
import {getPayments, getPaymentsSelector} from '../../state/payments'
import { COLOR } from '../../utils/constants'

import styles from './Home.module.scss'

const Home = () => {
  const dispatch = useDispatch()
  const payments = useSelector(getPaymentsSelector)

  useEffect(() => {
    dispatch(getPayments())
  }, [dispatch]);

  return (
    <Layout title="Regular Payments">
      {
        payments && payments.length !== 0
          ? <PaymentsList payments={payments} />
          : <div className={styles.noPayments}>No payments available.</div>
      }
      <Button to="/add" color={COLOR.ACCEPT}>Add a bill</Button>
    </Layout>
  )
}

export default Home
