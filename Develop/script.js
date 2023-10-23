// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password")

var length = 8;

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Just to confirm there are 26 letters!
console.log(letters.length);

// Write password to the #password input
function writePassword() {
  // var password = generatePassword(letters);
  var password = ""
  var passwordText = document.querySelector("#password");
  for(var i = 0; i < 9; i = i + 1) {

  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
