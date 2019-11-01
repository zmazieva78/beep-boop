$(function() {

  $("#submitButton").click(function(event) {
    event.preventDefault();

    var nameInput = $("#inputName").val();
    var numberInput = $("#inputNumber").val();
    var numberConvert = parseInt(numberInput);
    console.log(nameInput, numberInput, numberConvert);
  });


});
