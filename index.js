function happyHolidays(){
  return("Happy holidays!")
}

function happyHolidaysTo(name){
  return("Happy holidays, ${name}!")
}

function happyCustomHolidayTo(holiday,name){
  return("Happy ${holiday}, ${name}!")
}
happyCustomHolidayTo("Independence Day", "you")


function holidayCountdown(holiday, days) {
  return("It's ${days} days until ${holiday}!")
}
holidayCountdown("Mother", 20)
