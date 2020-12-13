import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../common/Button/Button'
import Layout from '../../common/Layout/Layout'
import PaymentsList from '../../components/PaymentsList/PaymentsList'
import {getPayments} from '../../state/payments'

const Home = () => {
  const dispatch = useDispatch()
  const payments = useSelector(state => state.payments)

  useEffect(() => {
    dispatch(getPayments())
  }, [dispatch]);

  return (
    <Layout title="Regular Payments">
      {
        payments 
          ? <PaymentsList payments={payments} />
          : <div>No payments available.</div>
      }
      <Button to="/add">Add a bill</Button>
    </Layout>
  )
}

export default Home
