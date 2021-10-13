var dateEl = $('#currentDay');



// Refresh current time each second
dateEl.text(moment().format("dddd MMMM DD, YYYY"))
var date = setInterval(() => {
  dateEl.text(moment().format("dddd MMMM DD, YYYY"))
},1000)