const lowerCase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
const upperCase = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ];
const numbers = [ 1,2,3,4,5,6,7,8,9,0 ];
const characters = [ "!","@","#","$","%","&" ];
let possibleCharacters = [];
let userPassword = "";

const createPassword = ( ) => {
    let length = document.getElementById( "passwordLength" ).value;
    let var1 = document.getElementById( "firstVariable" ).checked;
    let var2 = document.getElementById( "secondVariable" ).checked;
    let var3 = document.getElementById( "thirdVariable" ).checked;
    let var4 = document.getElementById( "fourthVariable" ).checked;
    console.log( length, var1, var2, var3, var4 );
}