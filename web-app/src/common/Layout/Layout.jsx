import React from 'react'
import PropTypes from 'prop-types'

import styles from './Layout.module.scss'

const Layout = ({ title, children }) => (
  <div className={styles.layout}>
    <h1 className={styles.header}>{title}</h1>
    <div className={styles.body}>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Layout
