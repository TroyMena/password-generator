// Assignment Code
var generateBtn = document.querySelector("#generate");

var charLimit = 8;

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log("test");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword () {
  var password = ""
  for(var i = 0; i < charLimit; i = i + 1) {
    password = password += letters[Math.floor(Math.random() * letters.length)];
    console.log(password);
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
