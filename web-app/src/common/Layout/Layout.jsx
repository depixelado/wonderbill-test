import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ title, children }) => (
  <div>
    <h1>{title}</h1>
    <div>
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Layout
