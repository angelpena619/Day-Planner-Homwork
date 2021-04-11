// created seprate intervals to break apart the values of actual time.
var hour9am = $("#9");
var hour10am = $("#10");
var hour11am = $("#11");
var hour12pm = $("#12");
var hour1pm = $("#13");
var hour2pm = $("#14");
var hour3pm = $("#15");
var hour4pm = $("#16");
var hour5pm = $("#17");

var time = moment();
// below sets current time using moment.js
var currentTime = parseInt(moment().format("H"));
console.log(currentTime)
// worked with tutor to apply a function to check time aka "time checker" the day of time the schedula can be set to, either oast, present or future. indicated by dirrent colors accesing from CSS files. 
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
function timeChecker() {
  
  $(".time-block").each(function () {
    var currentHour = parseInt($(this).attr("id"));
    if (currentHour < currentTime) {
      $(this).addClass("past");
    }
    if (currentHour > currentTime) {
      $(this).removeClass("past");
      $(this).addClass("future");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
  });
}
timeChecker();
// worked with tutor to apply a function to save the user input, if user cicks on "saveBtn" it will initiate a function to do an local storage for user input, for later consumption.
function savePlanner() {

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        console.log(this)
        var setSchedule = localStorage.getItem(id);

        if (setSchedule !== undefined) {
            $(this).children(".schedule").val(setSchedule);
        }
    });
}
savePlanner();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var setSchedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, setSchedule);
});
