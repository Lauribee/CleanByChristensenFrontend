'use strict'

function addReview(){

    let formData = {
       amountOfStars: $("input[name='stars']:checked").val(),
        reviewMessage: $("#besked-tekst").val()
    };


    $.ajax({
    type: "POST",
    url: "http://localhost:8080/api/reviews",
    data: JSON.stringify(formData),
    dataType: "json",
    encode: true,
    headers: {"Content-Type": "application/json;charset=UTF-8"}
}).done(function(data) {
console.log(data);
});



}