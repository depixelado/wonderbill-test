export default {
  createPayment: async (payment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payment)
    };

    try {
      const response = await fetch(
        'http://localhost:8080/payments',
        requestOptions
      )
      return response.json();
    } catch(error) {
      throw new Error('Payments API error: Impossible to add Payment')
    }
  }
}
