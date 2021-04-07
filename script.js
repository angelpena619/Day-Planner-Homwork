
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
var currentTime = 11;
// moment().format('hA');
var hours = [9,10,11,12]



//time from moment JS Below
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

function timeChecker(){
    for (var index= 0; index < hours.length; index++) {
        var currentHour= "#" + hours[index]
        console.log (currentHour)
        if (currentTime > hours [index] ) {
            $(currentHour).addClass(".past");

        } if (currentTime < hours [index] ) {
            $(currentHour).addClass(".future");

        } else {
            $(currentHour).addClass(".present");

        }
    }
}
timeChecker()