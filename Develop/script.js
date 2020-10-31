// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generate() {
//   let passwordCrit = document.getElementById("slider").value;

//   let passwordVal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()_+";
 
//   let password = "";

//   for (var i = 0; i <= passwordCrit; i++){
//     password = password + passwordVal.charAt(Math.floor(Math.random() * Math.floor(passwordVal.length - 1)));

//   }
//   document.getElementById("display").passwordVal = password;


// }






//generate random password
function generate(){

    //set password length/complexity
    let passwordLength = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //for loop to choose password characters
    for(var i = 0; i <= passwordLength; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to textbox
    document.getElementById("password").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//set default length display of 25
document.getElementById("length").innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("btn").oninput = function(){

    if(document.getElementById("btn").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("btn").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

