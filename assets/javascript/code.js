const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const characters = ["!", "#", "$", "%", "&", "*", "+", "?", "@", "~"];
const jumbotron = document.getElementById("generatedPassword");
let possibleCharacters = [];
let userPassword = [];
let pwLength = 8;
let pwBoolean1 = false;
let pwBoolean2 = false;
let pwBoolean3 = false;
let pwBoolean4 = false;
let lowerCaseValidator = 0;
let upperCaseValidator = 0;
let numbersValidator = 0;
let charactersValidator = 0;
let passwordIsValid = false;

const createPassword = () => {
  // empty variables to be used
  possibleCharacters = [];
  userPassword = [];
  // grab the length variable from the user input on form
  pwLength = parseInt(document.getElementById("passwordLength").value);
  // check to see if the length variable is too short
  if (pwLength < 8) {
    jumbotron.innerHTML = "Password length is too short.";
    return;
  }
  // check to see if the length variable is too long
  if (pwLength > 128) {
    jumbotron.innerHTML = "Password length is too long."
    return;
  }
  // check to see which other variables the user selected
  pwBoolean1 = document.getElementById("firstVariable").checked;
  pwBoolean2 = document.getElementById("secondVariable").checked;
  pwBoolean3 = document.getElementById("thirdVariable").checked;
  pwBoolean4 = document.getElementById("fourthVariable").checked;
  //if a variable is selected, add those characters to 'possibleCharacters' array
  if (pwBoolean1) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
  }
  if (pwBoolean2) {
    possibleCharacters = possibleCharacters.concat(upperCase);
  }
  if (pwBoolean3) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (pwBoolean4) {
    possibleCharacters = possibleCharacters.concat(characters);
  }
  //add a random character from 'possibleCharacters' to 'userPassword' array
  for (let i = 0; i < pwLength; ++i) {
    let x = Math.floor(Math.random() * possibleCharacters.length);
    userPassword.push(possibleCharacters[x]);
  };
  //check to see if at least one character from selected variables are included in password
  checkValidity(userPassword);
};

const checkValidity = (userPassword) => {
  //if lowerCase was selected, check for lower case characters
  if (pwBoolean1) {
    checkLowerCase(userPassword);
  //if upperCase was selected, check for upper case characters
  } else if (pwBoolean2) {
    checkUpperCase(userPassword);
  //if numbers was selected, check for numbers in password
  } else if (pwBoolean3) {
    checkNumbers(userPassword);
  //if characters was selected, check for special characters
  } else if (pwBoolean4) {
    checkCharacters(userPassword);
  //if no variables were selected, inform user they have to select at least one
  } else {
    jumbotron.innerHTML = "You must select at least one variable field."
  }
}

//check for lower case characters
const checkLowerCase = (userPassword) => {
  lowerCaseValidator = 0;
  //run through each element in password array, if it is a lower case letter, add 1 to lowerCaseValidator
  for (let i = 0; i < userPassword.length; ++i) {
    if (lowerCase.includes(userPassword[i])) {
      lowerCaseValidator++;
    }
  }
  //if lowerCaseValidator is still 0, create a new password and try again
  if (!lowerCaseValidator) {
    console.log("There were no lower case letters, generating new password...");
    createPassword();
  //if upperCase was selected earlier, check for upper case characters
  } else if (pwBoolean2) {
    checkUpperCase(userPassword);
  //if numbers was selected earlier, check for numbers
  } else if (pwBoolean3) {
    checkNumbers(userPassword);
  //if special characters was selected earlier, check for special characters
  } else if (pwBoolean4) {
    checkCharacters(userPassword);
  //if no other variables were selected, display the password
  } else {
    displayPassword();
  }
};

//check for upper case characters
const checkUpperCase = (userPassword) => {
  upperCaseValidator = 0;
  //run through each element in password array, if it is a upper case letter, add 1 to upperCaseValidator
  for (let i = 0; i < userPassword.length; ++i) {
    if (upperCase.includes(userPassword[i])) {
      upperCaseValidator++;
    }
  }
  //if upperCaseValidator is still 0, create a new password and try again
  if (!upperCaseValidator) {
    console.log("There were no upper case letters, generating new password...");
    createPassword();
  //if numbers was selected earlier, check for numbers
  } else if (pwBoolean3) {
    checkNumbers(userPassword);
  //if special characters was selected earlier, check for special characters
  } else if (pwBoolean4) {
    checkCharacters(userPassword);
  //if no other variables were selected, display the password
  } else {
    displayPassword();
  }
};

//check for numbers
const checkNumbers = (userPassword) => {
  numbersValidator = 0;
  //run through each element in password array, if it is a number, add 1 to numberValidator
  for (let i = 0; i < userPassword.length; ++i) {
    if (numbers.includes(userPassword[i])) {
      numbersValidator++;
    }
  }
  //if numberValidator is still 0, create a new password and try again
  if (!numbersValidator) {
    console.log("There were no numbers, generating new password...");
    createPassword();
  //if special characters was selected earlier, check for special characters
  } else if (pwBoolean4) {
    checkCharacters(userPassword);
  //if no other variables were selected, display the password
  } else {
    displayPassword();
  }
};

//check for special characters
const checkCharacters = (userPassword) => {
  charactersValidator = 0;
  //run through each element in password array, if it is a special character, add 1 to characterValidator
  for (let i = 0; i < userPassword.length; ++i) {
    if (characters.includes(userPassword[i])) {
      charactersValidator++;
    }
  }
  //if characterValidator is still 0, create a new password and try again
  if (!charactersValidator) {
    console.log("There were no special characters, generating new password...");
    createPassword();
  //display the password
  } else {
    displayPassword();
  }
};

//display the password
const displayPassword = () => {
  console.log("Your password is: " + userPassword.join(""));
  jumbotron.innerHTML = userPassword.join("");
};

const copyPassword = () => {
  //check to see if a password has been generated yet
  if (userPassword.length > 0) {
    //create a new element
    let el = document.createElement("textarea");
    //assign the password as a string to the value of the new element
    el.value = userPassword.join("");
    //add new element to the document
    document.body.appendChild(el);
    //select the newly created element
    el.select();
    //copy the password to the clipboard
    document.execCommand("copy");
    //delete the newly created element from the document
    document.body.removeChild(el);
    console.log("Copied password to clipboard: " + el.value);
  //if password has not been generated yet, do nothing.
  } else {
    console.log("No password has been generated yet.")
  }
};
