function happyHolidays(){
  return("Happy holidays!")
}
happyHolidays()
function happyHolidaysTo(name){
  return("Happy holidays, ${name}!")
}
happyHolidaysTo(you)

function happyCustomHolidayTo(holiday,name){
  return("Happy ${holiday}, ${name}!")
}
happyCustomHolidayTo(Independence Day, you)

function holidayCountdown(holiday, days) {
  return("It's ${days} days until ${holiday}!")
}
holidayCountdown(Mother, 20)
