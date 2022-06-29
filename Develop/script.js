// Assignment code here

// psuedocode



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generatePassword = function () {
  prompt (
    "How many charcacter would you like there to be?"
  );
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  

  passwordText.value = password;

  

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
