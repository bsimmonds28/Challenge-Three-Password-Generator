// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button and collect user's preferences
generateBtn.addEventListener("click", function() {
  
  //User's selection of variables to include
  var userSelect = {
    length: 8,
    lowerCase: "yes",
    upperCase: "yes",
    numeric: "yes",
    characters: "yes"
  };

  //Obtain number of characters within 8-128 characters
  getLength = function() {
    userSelect.length = window.prompt("Please enter a character length between 8 and 128 characters.");
    userSelect.length = parseInt(userSelect.length);
    if (Number.isInteger(userSelect.length) !== true) {
      window.alert("Invalid entry - Your password must be an integer that is at least 8 characters long and no longer than 128 characters.");
      getLength();
    }
    if (userSelect.length < 8 || userSelect.length > 128) {
      window.alert("Invalid entry - Your password must be at least 8 characters long and no longer than 128 characters.");
      getLength();
    }
  }
  getLength();

  //Confirm which special characters should be included
  getAllowedCharacters = function () {
    getLowerCase = function() {
      userSelect.lowerCase = window.prompt("Do you want to include lowercase letters? Please enter yes or no.");
      if (userSelect.lowerCase.toLowerCase() !== "yes" && userSelect.lowerCase.toLowerCase() !== "no") {
        window.alert('Invalid entry - Please enter "Yes" or "No"');
        getLowerCase();
      }
    }
    getLowerCase();

    getUpperCase = function() {
      userSelect.upperCase = window.prompt("Do you want to include uppercase letters? Please enter yes or no.");
      if (userSelect.upperCase.toLowerCase() !== "yes" && userSelect.upperCase.toLowerCase() !== "no") {
        window.alert('Invalid entry - Please enter "Yes" or "No"');
        getUpperCase();
      }
    }
    getUpperCase();

    getNumeric = function() {
      userSelect.numeric = window.prompt("Do you want to include numeric values? Please enter yes or no.");
      if (userSelect.numeric.toLowerCase() !== "yes" && userSelect.numeric.toLowerCase() !== "no") {
        window.alert('Invalid entry - Please enter "Yes" or "No"');
        getNumeric();
      }
    }
    getNumeric();

    getCharacters = function() {
      userSelect.characters = window.prompt("Do you want to include special characters? Please enter yes or no.");
      if (userSelect.characters.toLowerCase() !== "yes" && userSelect.characters.toLowerCase() !== "no") {
        window.alert('Invalid entry - Please enter "Yes" or "No"');
        getCharacters();
      }
    }
    getCharacters();

  }

  getAllowedCharacters();
  
  //Check that the user selected at least one option
  getCheckInput = function() {
    if (userSelect.lowerCase === "no" && userSelect.upperCase === "no" && userSelect.numeric === "no" && userSelect.characters === "no") {
      window.alert("You must select to include at least one of the following: lowercase letters, uppercase letters, numeric values, or special characters.");
      getAllowedCharacters();
      getCheckInput();
    }
  }

  getCheckInput();

  //Use user's preferences to generate a password
  function generatePassword() {
    var passcodeString = "";
    var allowedCharacters = "";
    var lowerCaseletters = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "0123456789";
    var specialCharacters = "!@^*+_-=()~><#$%&";

    //Create string of viable options based on user's preferences
    if (userSelect.lowerCase === "yes") {
      allowedCharacters = allowedCharacters.concat(lowerCaseletters);
    } 
    if(userSelect.upperCase === "yes") {
      allowedCharacters = allowedCharacters.concat(upperCaseletters);
    }
    if(userSelect.numeric === "yes"){
      allowedCharacters = allowedCharacters.concat(numbers);
    }
      
    if(userSelect.characters === "yes") {
      allowedCharacters = allowedCharacters.concat(specialCharacters);
    }
    console.log(allowedCharacters);

    //Generate random index number to select random item from string
    function getRandom(string) {
      var randomIndex = Math.floor(Math.random() * string.length);
      return string[randomIndex];
    }

    //Use random number to pull string item and add to passcode
    function getRandomString() {
      for (var i = 0; i < userSelect.length; i++){
        passcodeString += getRandom(allowedCharacters);
        console.log(getRandom(allowedCharacters));
        console.log(passcodeString);
      };
      return passcodeString;
    }

    var passwordText = document.querySelector("textarea");
    passwordText.removeAttribute("placeholder");
    passcodeString = getRandomString();
    passwordText.innerHTML = passcodeString;
    console.log(passcodeString);
  };

  generatePassword();

});