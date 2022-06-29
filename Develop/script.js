// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var symbols = ("!@#$%^&*");
    var numbers = ("0123456789");
    var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
    var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var combined = symbols + numbers + lowerCase + upperCase;
    var passwordLength = window.prompt("How many charcaters would you like in your password?")
    if (passwordLength >= 8 && passwordLength <= 128) {
      }
    else {
      window.alert("You need to provide a valid answer! Please try again.")
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
