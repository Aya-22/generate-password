// Assignment Code
var generateBtn = document.querySelector("#generate");

var choices = [];

var choiceSets = {
  charUp: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  charLr: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  charSp: [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@",'[',']',"^",'_',"`","{","|","}","~","\\"],
  number: [0,1,2,3,4,5,6,7,8,9],
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    var length = prompt("How many characters would you like in your password? Must be between 8-128 characters");
    console.log(length);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);