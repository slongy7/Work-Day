
// Adding the current day and year

var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do"));

// Having the rows change color depending on the hour of the day

var currentHour = moment().hour();
console.log ($(".row"))
var timeSlotList = $(".row")
    for (var i = 0; i < timeSlotList.length; i++) {
        console.log ($(timeSlotList[i]).attr("id"))
        var timeSlotHour = parseInt($(timeSlotList[i]).attr("id"))
        if (timeSlotHour === currentHour) {
            $(timeSlotList[i]).children()[1].classList.add("present")
        }
        else if(timeSlotHour < currentHour) {
            $(timeSlotList[i]).children()[1].classList.add("past")
        }
        else {
            $(timeSlotList[i]).children()[1].classList.add("future")
        }
    }

    // Unsuccesfully attempting to local save the text

    // localStorage.setItem("9", "hello");
    // console.log(localStorage.getItem(9))

    // var textRetrieve = $("text");
    // if (typeof(Storage) !== "undefined") {
    //     localStorage.setItem("row","text");
    //     document.getElementById("text").innerHTML
        
    // }
    //     else {
    //         document.getElementById("text").innerHTML = "Sorry there is no text.";
    //     }

// function store(){
    
//     var textRetrieve = document.getElementById().value;

//     window.localStorage.setItem(key,JSON.stringify(textRetrieve));

    
// }

// var textRetrieve = document.querySelector("text")
// var itemsArray = localStorage.getItem("text")

// localStorage.setItem("text"), JSON.stringify(itemsArray)
// document.getElementById("text").innerHTML = localStorage.getItem("text");

// addEventListener("click", function ()); {
//     localStorage.getItem
// }


