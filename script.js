// Assignment Code


var generateBtn = document.querySelector("#generate");

function generatePassword() {  
    

var numbers = "1234567890";
var symbols = "~!@#$%^&*(){}"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

var passwordlength = "";
var lowerConfirm;
var upperConfirm;
var symbolConfirm;
var numConfirm;
var fullpassword = "";
var passwordpicker = "";


//conditions for password criteria:

var passwordlength = prompt("Enter number of characters for the password ( between 8 and 128).");
if (passwordlength < 8 || passwordlength > 128) {
   alert("Pick more than 7 and less than 129 characters!");

var passwordlength = prompt("Enter number of characters for the password ( between 8 and 128)."); // prompt again if invalid input
 }


var lowerConfirm = confirm("Click OK if you want a lower case character.");
if ( lowerConfirm === true) {
    lowerConfirm = lowercase;
}
else {
    lowerConfirm = "";
}


var upperConfirm = confirm("Click OK if you want a upper case character.");
if ( upperConfirm === true) {
    upperConfirm = uppercase;
}
else {
    upperConfirm = "";
}

   
var symbolConfirm = confirm("Click OK if you want a symbol character.");
if ( symbolConfirm === true) {
    symbolConfirm = symbols;
}
else {
    symbolConfirm = "";
}


var numConfirm = confirm("Click OK if you want a numeric character.");
if ( numConfirm === true) {
    numConfirm = numbers;
}
else {
    numConfirm = "";
}

//concat all strings to make one string - "fullpassword":

var fullpassword = numConfirm.concat(symbolConfirm, upperConfirm, lowerConfirm);
console.log(fullpassword);

//loop to select random password
for (var i=0; i < passwordlength; i++) {
passwordpicker = passwordpicker + fullpassword.charAt(Math.floor(Math.random() * Math.floor(fullpassword.length - 1)));
}

console.log(passwordpicker);
return passwordpicker;
}
 

//display password in the text-area:
 function writePassword () {

    var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }

 generateBtn.addEventListener("click", writePassword);

  
