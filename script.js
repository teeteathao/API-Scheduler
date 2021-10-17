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
  localStorage.setItem(timeBlock, userInput)
})

// get item = persist to keep item on the page when refreshed

$("#hour-8 .userInput").val(localStorage.getItem("hour-8"));
$("#hour-9 .userInput").val(localStorage.getItem("hour-9"));
$("#hour-10 .userInput").val(localStorage.getItem("hour-10"));
$("#hour-11 .userInput").val(localStorage.getItem("hour-11"));
$("#hour-12 .userInput").val(localStorage.getItem("hour-12"));
$("#hour-13 .userInput").val(localStorage.getItem("hour-13"));
$("#hour-14 .userInput").val(localStorage.getItem("hour-14"));
$("#hour-15 .userInput").val(localStorage.getItem("hour-15"));
$("#hour-16 .userInput").val(localStorage.getItem("hour-16"));
$("#hour-17 .userInput").val(localStorage.getItem("hour-17"));


})


// objects, json, data types, event delegation, event propagation