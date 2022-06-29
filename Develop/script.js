// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = window.prompt("How many charcaters would you like in your password?")
  if (passwordLength >= 8 && passwordLength <= 128) {
    }
  else {
    window.alert("You need to provide a valid answer! Please try again.")
    return writePassword()
  };

  var symbols = window.confirm ("Would you like to use symbols?");
    if (symbols) {
      symbols = "!@#$%^&*";
    } else {
      symbols = "";
    };

  var numbers = window.confirm ("would you like to use numbers?");
    if (numbers) {
      numbers = "0123456789";
    } else {
      numbers = "";
    };

  var lowerCase = window.confirm ("would you like to use lowercase letters?");
    if (lowerCase) {
      lowerCase = "abcdefghijklmnopqrstuvwxyz";
    } else {
      lowerCase = "";
    };
  
  var upperCase = window.confirm ("would you like to use uppercase letters?");
    if (upperCase) {
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else {
      upperCase = "";
    };

  var combined = symbols + numbers + lowerCase + upperCase;
    if (combined === "") {
      window.alert ("You must choose at least one criteria.")
      return writePassword()
    };

    var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * combined.length);
    password += combined.substring(randomNumber, randomNumber +1);
   }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
