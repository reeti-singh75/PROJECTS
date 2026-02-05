const readlineSync = require("readline-sync");
let ch = readlineSync.question("Enter here character :  ");

// cha = character.toLocaleLowerCase();
// switch (character) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonant");
//         break;
// }



//========================================================================


// ch = ch.toLocaleLowerCase();
switch (true) {
    case (ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"):
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
        break;
}