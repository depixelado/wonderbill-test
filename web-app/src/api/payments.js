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
      throw new Error('Payments API error: Impossible to add Payment')
    }
  },
  getPayments: async () => {
    try {
      const response = await fetch(`${baseUrl}/payments`)
      return response.json();
    } catch(error) {
      throw new Error('Payments API error: Impossible to retrieve payments')
    }
  }
}
