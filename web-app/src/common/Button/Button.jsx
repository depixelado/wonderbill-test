import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({ children, className, to, ...rest}) => {
  const classes = `${styles.button} ${className}`
  
  return (
    to !== ''
      ? <Link className={classes} to={to}>{children}</Link>
      : <button className={classes} {...rest}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string
}

Button.defaultProps = {
  className: '',
  to: ''
}

export default Button
