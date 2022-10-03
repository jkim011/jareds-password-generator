// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables added for lists of character types
var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

//Added new function for window prompts with password criteria
function prompts() {
  allValues = [];

  inputPasswordLength = parseInt(prompt("How many characters do you want your password to have?"));

  if (inputPasswordLength < 8 || inputPasswordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return false;
  } 
     
  if (confirm("Would you like to include lowercase letters in your password?")) {
    allValues = allValues.concat(lowercaseList)  
  }
  
  if (confirm("Would you like to include uppercase letters in your password?")) {
    allValues = allValues.concat(uppercaseList) 
  }
  
  if (confirm("Would you like to include numbers in your password?")) {
    allValues = allValues.concat(numbersList) 
  }
  
  if (confirm("Would you like to include special characters in your password?")) {
    allValues = allValues.concat(specialList) 
  }
  
  return true;
}

//Defined the generatePassword function
function generatePassword() {
  var password = "";

  for (var i = 0; i < inputPasswordLength; i++) {
    var randomValue = Math.floor(Math.random() * allValues.length);
    password = password + allValues[randomValue];
  } 
    
  return password
}

// Write password to the #password input
function writePassword() {
  var promptsTrue = prompts();
  var passwordText = document.querySelector("#password");

  if (promptsTrue) {
  var newpassword = generatePassword();
  passwordText.value = newpassword;
  } else {
    passwordText.value = ""
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
