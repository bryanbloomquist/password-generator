const lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
const upperCase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
const numbers = [ 1,2,3,4,5,6,7,8,9,0 ];
const characters = [ "!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","=",">","?","@","[","^","`","|","~" ];
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

const createPassword = ( ) => {
	possibleCharacters = [];
	userPassword = [];
	pwLength = parseInt( document.getElementById( "passwordLength" ).value );
	pwBoolean1 = document.getElementById( "firstVariable" ).checked;
	pwBoolean2 = document.getElementById( "secondVariable" ).checked;
	pwBoolean3 = document.getElementById( "thirdVariable" ).checked;
	pwBoolean4 = document.getElementById( "fourthVariable" ).checked;
	if ( pwBoolean1 ) {
		possibleCharacters = possibleCharacters.concat( lowerCase );
	}
	if ( pwBoolean2 ) {
		possibleCharacters = possibleCharacters.concat( upperCase );
	}
	if ( pwBoolean3 ) {
		possibleCharacters = possibleCharacters.concat( numbers );
	}
	if ( pwBoolean4 ) {
		possibleCharacters = possibleCharacters.concat( characters );
	}
	for ( let i = 0; i < pwLength; ++i ) {
		let x = Math.floor( Math.random() * possibleCharacters.length );
		userPassword.push( possibleCharacters[ x ]);
	};
	console.log( userPassword.join( "" ));
	checkValidity( userPassword );
};

const checkValidity = ( userPassword ) => {
	if ( pwBoolean1 ) {
		checkLowerCase( userPassword );
	} else if ( pwBoolean2 ) {
		checkUpperCase( userPassword );
	} else if ( pwBoolean3 ) {
		checkNumbers( userPassword );
	} else if ( pwBoolean4 ) {
		checkCharacters( userPassword );
	}
}

const checkLowerCase = ( userPassword ) => {
	lowerCaseValidator = 0;
	for ( let i = 0; i < userPassword.length; ++i ) {
		if (( lowerCase.indexOf( userPassword[ i ]) !== -1 )) {
			lowerCaseValidator++;
		}
	}
	console.log( lowerCaseValidator );
	if ( !lowerCaseValidator ) {
		console.log( "There were no lower case letters, generating new password..." );
		createPassword();
	} else if ( pwBoolean2 ) {
		checkUpperCase( userPassword );
	} else if ( pwBoolean3 ) {
		checkNumbers( userPassword );
	} else if ( pwBoolean4 ) {
		checkCharacters( userPassword );
	} else {
		displayPassword();
	}
};

const checkUpperCase = ( userPassword ) => {
	upperCaseValidator = 0;
	for ( let i = 0; i < userPassword.length; ++i ) {
		if (( upperCase.indexOf( userPassword[ i ]) !== -1 )) {
			upperCaseValidator++;
		}
	}
	console.log( upperCaseValidator );
	if ( !upperCaseValidator ) {
		console.log( "There were no upper case letters, generating new password..." );
		createPassword();
	} else if ( pwBoolean3 ) {
		checkNumbers( userPassword );
	} else if ( pwBoolean4 ) {
		checkCharacters( userPassword );
	} else {
		displayPassword();
	}
};

const checkNumbers = ( userPassword ) => {
	numbersValidator = 0;
	for ( let i = 0; i < userPassword.length; ++i ) {
		if (( numbers.indexOf( userPassword[ i ]) !== -1 )) {
			numbersValidator++;
		}
	}
	console.log( numbersValidator );
	if ( !numbersValidator ) {
		console.log( "There were no numbers, generating new password..." );
		createPassword();
	} else if ( pwBoolean4 ) {
		checkCharacters( userPassword );
	} else {
		displayPassword();
	}
};

const checkCharacters = ( userPassword ) => {
	charactersValidator = 0;
	for ( let i = 0; i < userPassword.length; ++i ) {
		if (( characters.indexOf( userPassword[ i ]) !== -1 )) {
			charactersValidator++;
		}
	}
	console.log( charactersValidator );
	if ( !charactersValidator ) {
		console.log( "There were no special characters, generating new password..." );
		createPassword();
	} else {
		displayPassword();
	}
};

const displayPassword = () => {
	document.getElementById( "generatedPassword" ).innerHTML = userPassword.join( "" );
};