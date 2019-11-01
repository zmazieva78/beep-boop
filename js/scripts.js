// This function outside of jQuery framework, because it is not part of the .click() function
function beepBoop(name, number) {
  let numberArray = number.toString().split("");
// First we compare number to special numbers: 13, 21, 32 if input doesn't contain any of special numbers, then it executes FOR loop and lookig for other special characters like  1, 2, 3 (note they are string characters, if it finds any of them, it adds "Beep", "Boop" etc texts.
  if (number === 13 || number === 32) {
    return "I am sorry, " + name  + " I'm afraid I can't do that";
  } else if (number === 21) {
    return "Boop";
  } else {
    for (var i = 0; i < numberArray.length; i++) {
      let digit = numberArray[i];
      if (digit === '1') {
        return "Beep!";
      } else if (digit === '2'){
        return "Boop!";
      } else if (digit === '3') {
        return "I am sorry, " + name + "I'm afraid I can't do that";
      }
    }

    return number;
   }
};
// jQuery starts here
$(function() {

  $("#submitButton").click(function(event) {
    event.preventDefault();

    var nameInput = $("#inputName").val();
    var numberInput = $("#inputNumber").val();
    let number = parseInt(numberInput);
    var result = "";

// This for loop statement takes number and add one by one digit starting form 0 all the way up to inputed number.
    for (var num = 0; num <= number; num++) {
      let res = beepBoop(nameInput, num);

      if (result === "") {
        result += res;
      } else {
        result += ", " + res;
      };

    }
// Here we display result in HTML page
    $(".info").hide();
    $(".text").text(result);

  });

});
