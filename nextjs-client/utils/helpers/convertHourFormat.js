export  function convert12To24HourFormat(timeString) { 
  const [time, period] = timeString.split(' '); 
  const [hour, minute] = time.split(':'); 
  let formattedHour = parseInt(hour); 
  if (period === 'PM') { 
    formattedHour += formattedHour === 12 ? 0 : 12; 
  }
  if (formattedHour < 10){
    formattedHour = `0${formattedHour}`
  }
  return `${formattedHour}:${minute}`; 
}