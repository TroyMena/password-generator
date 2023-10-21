// Assignment Code
var generateBtn = document.querySelector("#generate");
var cardBody = document.querySelector(".card-body");

cardBody.addEventListener("click",function() {
	document.getElementById('password').readOnly = false;
})

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Just to confirm there are 26 letters!
console.log(letters.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
