import React from 'react'
import Layout from '../Layout/Layout'
import PropTypes from 'prop-types'

import styles from './LayoutPayment.module.scss'

const LayoutPayment = ({title, subtitle, description, children}) => (
  <Layout title={title}>
    <h2 className={styles.subtitle}>{subtitle}</h2>
    <p className={styles.description}>{description}</p>
    {children}
  </Layout>
)

LayoutPayment.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default LayoutPayment
