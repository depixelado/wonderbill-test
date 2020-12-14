const baseUrl = 'http://localhost:8080';

export default {
  createPayment: async (payment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payment)
    };

    try {
      const response = await fetch(
        `${baseUrl}/payments`,
        requestOptions
      )
      return response.json();
    } catch(error) {
      throw new Error('Payments API error: Impossible to add payment')
    }
  },
  getPayments: async () => {
    try {
      const response = await fetch(`${baseUrl}/payments`)
      return response.json();
    } catch(error) {
      throw new Error('Payments API error: Impossible to retrieve payments')
    }
  },
  getPayment: async (paymentId) => {
    try {
      const response = await fetch(`${baseUrl}/payments/${paymentId}`)
      return response.json();
    } catch(error) {
      throw new Error(`Payments API error: Impossible to retrieve payment ${paymentId}`)
    }
  },
  updatePayment: async (payment) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payment)
    };

    try {
      const response = await fetch(
        `${baseUrl}/payments/${payment.id}`,
        requestOptions
      )
      return response.json();
    } catch(error) {
      throw new Error(`Payments API error: Impossible to modify payment ${payment.id}`)
    }
  },
  deletePayment: async (paymentId) => {
    const requestOptions = { method: 'DELETE' };

    try {
      await fetch(
        `${baseUrl}/payments/${paymentId}`,
        requestOptions
      )
      return paymentId;
    } catch(error) {
      throw new Error(`Payments API error: Impossible to delete payment ${paymentId}`)
    }
  }
}
