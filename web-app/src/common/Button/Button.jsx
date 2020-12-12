import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ children, className, ...rest}) => (
  <button
    className={`${styles.button} ${className}`}
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
}

Button.defaultProps = {
  className: ''
}

export default Button
