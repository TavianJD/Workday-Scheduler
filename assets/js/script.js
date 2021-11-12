$(document).ready(function(){


$(".saveBtn").on('click', function(){

    var textAreaValue = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr('id');

    console.log(timeBlock, textAreaValue)

    localStorage.setItem(timeBlock, textAreaValue);

    $('#notification').removeClass("hide");

    setTimeout(function(){
        $('#notification').addClass("hide");
    }, 3000)

})

function keepinTime(){

    var currentHour = moment().hours();
    console.log(currentHour)

    $('.timeBlock').each(function(){
        // referencing the .timeBlock's id and splitting it at the "-" then gets put into an array ['row-', '10'] and we want the second index so we use [1] wrap it all in parseInt to make it into a number
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if(blockHour < currentHour){
            $(this).addClass("past");
        } else if(blockHour === currentHour){
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })


}

keepinTime()

//$("#row-9 .description").val(localStorage.getItem("row-9"));

for(var i = 9; i < 18; i++){
    $(`#row-${[i]} .description`).val(localStorage.getItem(`row-${[i]}`))
}

$("#currentDay").text(moment().format("dddd, MMMM Do"))




$("#searchBtn").on("click", function(){
    var searchVal = $("#cityInput").val()

    getCurrentWeather(searchVal)
})

function getCurrentWeather(searchVal) {
console.log("SERACH VAL IN GETCURRENT WEATHER", searchVal)
// youll call your api and input the searchVal into the queryURL
}











})