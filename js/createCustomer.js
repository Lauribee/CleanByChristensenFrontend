'use strict'

function addCustomer(){

    let formData = {
        subject : $("#emne").val(),
        firstName : $("#fornavn").val(),
        lastName : $("#efternavn").val(),
        address : $("#adresse").val(),
        phoneNumber : $("#tlf").val(),
        message : $("#beskrivelse").val(),
        kvm : $("#kvm").val()

    };


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/customers",
        data: JSON.stringify(formData),
        dataType: "json",
        encode: true,
        headers: {"Content-Type": "application/json;charset=UTF-8"}
    }).done(function(data) {
        console.log(data);
    });
}