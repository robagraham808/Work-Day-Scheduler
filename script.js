var currentDay = dayjs().format('dddd, MMMM D, YYYY');
console.log(currentDay);
var eventsData;
setInterval(function () {
    setHourColors()

}, 60000);



// localStorage.setItem("calenderEvents", JSON.stringify(eventsData));

function setHourColors() {
    var now = dayjs();
    console.log(now.hour())
    var textboxes = $("textarea");
    console.log(textboxes);
    // for (var i = 9; i < 18; i++) {
    // //$("#hour-" + i + "textarea").removeClass("future");
    // if (i < now.hour()) {
    //     console.log($("#hour" +i +"textarea"));
    //     $("#hour" + i + "textarea").addClass("past");
    // } else if (i == now.hour()) {
    //     $("#hour" + i + " textarea").addClass("present");
    // } else if (i > now.hour()) {
    //     $("#hour" + i + "textarea").addClass("future");
    // }

    $.each(textboxes, function (index, value) {
        let textboxTime = $(this).attr("id");
        if (textboxTime < now.hour()) {
            $(value).addClass("past");
        }
        else if (textboxTime == now.hour()) {
            $(value).addClass("present");
        
        } else if (textboxTime > now.hour()) {
            $(value).addClass("future");
        }
    })
}


$("#currentDay").text(currentDay);

function loadStoredData() {
    $("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));
   
}



// function loadStoredData() {
//     const eventsData = JSON.parse(localStorage.getItem("calenderEvents")) ||[];
//     // TODO load existing data from local storage
// }

function handleSaveClick(event) {
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];
    // TODO store this hour's data in local storage
   
    localStorage.setItem( hour, value );
    loadStoredData();
}
$(function () {
    loadStoredData();
    setHourColors();
});

$('.saveBtn').on('click', handleSaveClick);



$('#currentDay').val(moment().format('LLLL'));


// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ')
//   {
//   if (minute===0 && second===0)
//   {
//   hour=12;
//   prepand=' Noon';
//   }
//   else
//   {
//   hour=12;
//   prepand=' PM';
//   }
//   }
//   if (hour===0 && prepand===' AM ')
//   {
//   if (minute===0 && second===0)
//   {
//   hour=12;
//   prepand=' Midnight';
//   }
//   else
//   {
//   hour=12;
//   prepand=' AM';
//   }
//   }
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);