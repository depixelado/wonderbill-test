import { getNextBillDate } from './dates'
import moment from 'moment'
import { FREQUENCY } from './constants'

const dateFormat = 'DD/MM/YYYY';

describe('getNextBillDate', () => {
  it('returns same day if matches payment day', () => {
    // Arrange
    const today = new Date('2020/10/3')

    // Act
    const result = getNextBillDate(today, today, FREQUENCY.WEEKLY)
  
    // Assert
    expect(
      moment(result).format(dateFormat)
    ).toBe(
      moment(today).format(dateFormat)
    )
  })

  it('returns this month bill date if today is before due date', () => {
    // Arrange
    const start = new Date('2020/10/3')
    const today = new Date('2020/11/1')
    const expected = new Date('2020/11/3')

    // Act
    const result = getNextBillDate(start, today, FREQUENCY.MONTHLY);
  
    // Assert
    expect(
      moment(result).format(dateFormat)
    ).toBe(
      moment(expected).format(dateFormat)
    )
  })

  it('returns next month bill date if today is after this month due date', () => {
    // Arrange
    const start = new Date('2020/10/3')
    const today = new Date('2020/11/4')
    const expected = new Date('2020/12/3')

    // Act
    const result = getNextBillDate(start, today, FREQUENCY.MONTHLY);
  
    // Assert
    expect(
      moment(result).format(dateFormat)
    ).toBe(
      moment(expected).format(dateFormat)
    )
  })

  it('returns first month of next year if next due is after end of the year', () => {
    // Arrange
    const start = new Date('2020/10/3')
    const today = new Date('2020/12/4')
    const expected = new Date('2021/01/3')

    // Act
    const result = getNextBillDate(start, today, FREQUENCY.MONTHLY);
  
    // Assert
    expect(
      moment(result).format(dateFormat)
    ).toBe(
      moment(expected).format(dateFormat)
    )
  })

  it('returns end of the month if next month does not have such day', () => {
    // Arrange
    const start = new Date('2019/01/31')
    const today = new Date('2020/02/04')
    const expected = new Date('2020/02/29')

    // Act
    const result = getNextBillDate(start, today, FREQUENCY.MONTHLY);
  
    // Assert
    expect(
      moment(result).format(dateFormat)
    ).toBe(
      moment(expected).format(dateFormat)
    )
  })
})
