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
    if (length >= 8 && length <= 128) {
        var upperCase = confirm("Would you like upper case letters?");
        console.log(upperCase);
        var lowerCase = confirm("Would you like lower case letters?");
        console.log(lowerCase);
        var special =  confirm("Would you like special characters?");
        console.log(special);
        var num = confirm ("Would you like numeric values?");
        console.log(num);
    }
    else {
        alert("Password must be between 8-128 characters"); 
        generatePassword();
    }

    if (upperCase == false && lowerCase == false && special == false && num == false) {
        alert("No character types were chosen. At lease 1 character type must be chosen to generate password.");
        generatePassword();
    }
    if(upperCase) {
        choices = 
        choices.concat(choiceSets.charUp)
      
        }
        if(lowerCase) {
        choices = 
        choices.concat(choiceSets.charLr)
      
       }
      
        if(special) {
        choices = 
        choices.concat(choiceSets.charSp)
    
        }
        if(num) {
        choices = 
        choices.concat(choiceSets.number)
        
      }
      var password = "";
      for(var i = 0; i < length; i++) {
        password += choices[Math.floor(Math.random() * choices.length)];
        }
      
      console.log(choices)
    
      // for (let index = 0; index < length.length; index++) {
      //   const element = length[index];
    
        
      // }
    
      return password;
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);