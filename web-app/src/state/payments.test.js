import reducer, {
  createPayment,
  deletePayment,
  getPayment,
  getPayments,
  updatePayment,
} from './payments'

const paymentsMockData = [
  {
    name: "Test",
    amount: "500",
    startDate: "2020-12-18",
    frequency: "monthly",
    id: "16d0e7c3-388f-4240-a2bc-61946c584a99"
  },
  {
    name: "Test 2",
    amount: "500",
    startDate: "2020-12-18",
    frequency: "monthly",
    id: "16d0e7c3-388f-4240-a2bc-61946c584a91"
  }
];

describe('Payments Slice', () => {
  describe('createPayment', () => {
    it('add payment to the state when is fulfilled', () => {
      expect(reducer({}, {
        type: createPayment.fulfilled,
        payload: Object.assign({}, paymentsMockData[0])
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      })
    })
  
    it('add payment to state with other payments when fulfilled', () => {
      expect(reducer({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      }, {
        type: createPayment.fulfilled,
        payload: Object.assign({}, paymentsMockData[1])
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0]),
        "16d0e7c3-388f-4240-a2bc-61946c584a91": Object.assign({}, paymentsMockData[1])
      })
    })
  })

  describe('getPayments', () => {
    it('returns payments when getPayments is fulfilled', () => {
      expect(reducer({}, {
        type: getPayments.fulfilled,
        payload: paymentsMockData
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": 
          Object.assign({}, paymentsMockData[0]),
        "16d0e7c3-388f-4240-a2bc-61946c584a91":
          Object.assign({}, paymentsMockData[1])
      })
    })
  })

  describe('getPayment', () => {
    it('add payment to the state when is fulfilled', () => {
      expect(reducer({}, {
        type: getPayment.fulfilled,
        payload: Object.assign({}, paymentsMockData[0])
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      })
    })

    it('add payment to state with other payments when fulfilled', () => {
      expect(reducer({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      }, {
        type: getPayment.fulfilled,
        payload: Object.assign({}, paymentsMockData[1])
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0]),
        "16d0e7c3-388f-4240-a2bc-61946c584a91": Object.assign({}, paymentsMockData[1])
      })
    })
  })

  describe('updatePayment', () => {
    it('replace payment to the state when is fulfilled', () => {
      expect(reducer({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      }, {
        type: updatePayment.fulfilled,
        payload: Object.assign({}, paymentsMockData[0], { name: 'Test Edited'})
      })).toStrictEqual({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0], { name: 'Test Edited'})
      })
    })
  })

  describe('deletePayment', () => {
    it('deletes payment when is fulfilled', () => {
      expect(reducer({
        "16d0e7c3-388f-4240-a2bc-61946c584a99": Object.assign({}, paymentsMockData[0])
      }, {
        type: deletePayment.fulfilled,
        payload: "16d0e7c3-388f-4240-a2bc-61946c584a99"
      })).toStrictEqual({})
    })
  })
})
