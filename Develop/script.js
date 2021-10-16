$(document).ready(function (){

var dateEl = $('#currentDay');


// Display current date
dateEl.text(moment().format("dddd MMMM DD, YYYY"))
var date = setInterval(() => {
  dateEl.text(moment().format("dddd MMMM DD, YYYY"))
},1000)

// Timeblocks
function hourTrack(){
  var currentHour = moment().hour();
    console.log(currentHour);
  
}

// Add eventlistener to saveBtn
$(".saveBtn").on("click", function(){
  console.log("text")
  // grab input
  var userInput = $(this).siblings(".userInput").val();
  console.log(typeof userInput)
  // check timeblock 11 class
  // grab time
  var timeBlock = $(this).parent().attr("id");
  console.log(typeof timeBlock)
  // save to local storage
  localStorage.setItem(userInput, timeBlock)
})

var obj = {
  firstName: "thao", 
  "firstName": "thao", 
}

})