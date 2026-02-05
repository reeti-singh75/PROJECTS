let p = document.getElementById("p");
let name = document.getElementById("name");
let email = document.getElementById("email");
let captureShow = document.getElementById("cap");
let showcapture = document.getElementById("showcapture");
let capture = document.getElementById("capture");
let reset = document.getElementById("reset");
let submit = document.getElementById("submit");
let captureText = captureShow.textContent;
let captureValue;

let smallCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let capitalCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "="];

// reset.addEventListener("click",function(){
// for(let i=0;i<10;i++){
//     let output="";
//     output=output+smallCharacter[i]+capitalCharacter[i]+digits[i]+specialCharacter[i]+smallCharacter[i+1]+capitalCharacter[i+1];
//     // output.style.color="black";
//     captureShow.textContent=output;
// }
// })

captureShow.textContent = smallCharacter[(Math.floor(Math.random() * smallCharacter.length))] + digits[(Math.floor(Math.random() * digits.length))] + capitalCharacter[(Math.floor(Math.random() * capitalCharacter.length))] + specialCharacter[(Math.floor(Math.random() * specialCharacter.length))] + capitalCharacter[(Math.floor(Math.random() * capitalCharacter.length))] + specialCharacter[(Math.floor(Math.random() * specialCharacter.length))];


submit.addEventListener("click", function () {
    // console.log(captureText, captureValue);
    captureValue = capture.value
    if (captureShow.textContent === captureValue) {
        p.textContent = "Captcha succesfully submited";
        alert("Captcha succesfully submited");
    } else {
        p.textContent = "you Have Enter wrong Captcha try again";
        alert("you Have Enter wrong Captcha try again");
    }
});
// p.textContent="hello world"
