import PropTypes from 'prop-types'

export const PaymentRequired = {
  amount: PropTypes.string.isRequired,
  frequency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
}

export const Payment = {
  amount: PropTypes.string,
  frequency: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  startDate: PropTypes.string,
}
