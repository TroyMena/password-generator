// Assignment Code
var generateBtn = document.querySelector("#generate");

// I am first starting this password generator out with a pre-fixed length of 8 characters
var charLimit = 8;

// The letters variable is an array of all lowercase alphabetical characters.
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // The console.log(password) below was to confirm the button returned a response when clicked.
  // console.log("test");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function generatePassword () {
  var password = ""
  for(var i = 0; i < charLimit; i = i + 1) {
    password = password += letters[Math.floor(Math.random() * letters.length)];
    // The console.log(password) below was to confirm the characters were randomly selected and that each character was appended to the variable, password, after each iteration (until there were 8 iterations).
    // console.log(password);
  }

  // To link the generatePassword() function to the writePassword() function, it needs the return below.
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
