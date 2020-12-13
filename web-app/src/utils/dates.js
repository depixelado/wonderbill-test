import { FREQUENCY } from './constants'

const LAST_MONTH_YEAR = 11
const FIRST_MONTH_YEAR = 0
const WEEK_DAYS = 7

const getMonthLastDay = (month, year) => {
  const date = new Date(year, month, 0)
  return date.getDate();
}

const getNextAnnuallyBill = (startDate, today) => {
  const now = new Date(today.getTime())
  const billDate = new Date(startDate.getTime())
  billDate.setFullYear(now.getFullYear())
  
  if(now < billDate) return billDate;
  else {
    billDate.setFullYear(now.getFullYear() + 1)
    return billDate;
  }
}

const getNextMonthlyBill = (startDate, today) => {
  const now = new Date(today.getTime())

  // Ensure day exists on this month
  let monthLastDay = getMonthLastDay(now.getMonth() + 1, now.getFullYear())
  let dueDay = (new Date(startDate)).getDate();
  if(dueDay > monthLastDay) dueDay = monthLastDay;

  // This month due date
  const billDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    dueDay
  )

  if(now < billDate) return billDate
  else {
    let year = now.getMonth() === LAST_MONTH_YEAR 
    ? now.getFullYear() + 1 
    : now.getFullYear()
    
    let month = now.getMonth() === LAST_MONTH_YEAR 
    ? FIRST_MONTH_YEAR 
    : now.getMonth() + 1
    
    // Ensure day exist on next month
    dueDay = startDate.getDate()
    monthLastDay = getMonthLastDay(now.getMonth() + 1, year)
    if(dueDay > monthLastDay) dueDay = monthLastDay
    
    return new Date(year, month, dueDay);
  }
}

const getNextWeeklyBill = (startDate, today) => {
  const now = new Date(today.getTime())
  const date = new Date(startDate.getTime())
  const billWeekDay = date.getDay();
  const currentDay = now.getDay()
  
  if(currentDay <= billWeekDay) {
    now.setDate(now.getDate() + (billWeekDay - currentDay))
    return now;
  } else {
    now.setDate(now.getDate() + (WEEK_DAYS - currentDay + billWeekDay))
    return now;
  }
}

export const getNextBillDate = (startDate, todayDate, frequency) => {
  if(frequency === FREQUENCY.ANNUALLY) 
    return getNextAnnuallyBill(startDate, todayDate);
  else if (frequency === FREQUENCY.MONTHLY) 
    return getNextMonthlyBill(startDate, todayDate)
  else 
    return getNextWeeklyBill(startDate, todayDate)
}
