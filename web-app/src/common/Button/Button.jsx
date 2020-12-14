import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'
import { COLOR } from '../../utils/constants'

const Button = ({ children, className, to, color, ...rest}) => {
  const classes = `${styles.button} ${styles[color]} ${className}`
  
  return (
    to !== ''
      ? <Link className={classes} to={to}>{children}</Link>
      : <button className={classes} {...rest}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.oneOf([COLOR.ACCEPT, COLOR.CAUTION])
}

Button.defaultProps = {
  className: '',
  to: ''
}

export default Button
