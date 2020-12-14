import React from 'react'
import styles from './Select.module.scss'
import PropTypes from 'prop-types'

const Select = ({className, children, ...props}) => (
  <select
    className={`${styles.select} ${className}`}
    {...props}
  >
    {children}
  </select>
)

Select.propTypes = {
  className: PropTypes.string,
}

Select.defaultProps = {
  className: ''
}

export default Select
