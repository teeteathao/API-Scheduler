$(document).ready(function (){

var dateEl = $('#currentDay');


// Display current date
dateEl.text(moment().format("dddd MMMM DD, YYYY h:mm a"))
var date = setInterval(() => {
  dateEl.text(moment().format("dddd MMMM DD, YYYY h:mm a"))
},1000)

// Timeblocks
// create function that checks the current time to see past, present, future
function hourTrack(){
  var currentHour = moment().hour();
    console.log(currentHour);
  
  $(".time-block").each(function(){
    var hourColor = parseInt($(this).attr("id").split("hour-")[1]);
    console.log(hourColor)
    console.log(`currentHour: ${currentHour}  hourColor:${hourColor}`)
    
    if(currentHour > hourColor){
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
    else if(currentHour === hourColor){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present"); 
    }
    else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}
hourTrack();


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

// get item = persist to keep item on the page when refreshed

$("#hour-8am .userInput").val(localStorage.getItem("hour-8am"));
$("#hour-9am .userInput").val(localStorage.getItem("hour-9am"));
$("#hour-10am .userInput").val(localStorage.getItem("hour-10am"));
$("#hour-11am .userInput").val(localStorage.getItem("hour-11am"));
$("#hour-12pm .userInput").val(localStorage.getItem("hour-12pm"));
$("#hour-1pm .userInput").val(localStorage.getItem("hour-1pm"));
$("#hour-2pm .userInput").val(localStorage.getItem("hour-2pm"));
$("#hour-3pm .userInput").val(localStorage.getItem("hour-3pm"));
$("#hour-4pm .userInput").val(localStorage.getItem("hour-4pm"));
$("#hour-5pm .userInput").val(localStorage.getItem("hour-5pm"));







})


// objects, json, data types, event delegation, event propagation