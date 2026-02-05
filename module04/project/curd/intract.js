const input = require("readline-sync");
function mainmanu() {
    while (true) {
        console.log("1.Say Hello    ");
        console.log("2.Say Good bye   ");
        console.log("2. Exit   ");

        let choice = input.question("Enter your choise");
        if (choice == 1) {
            console.log("Hello ! How are you..?");
        } else if (choice == 2) {
            console.log("Goodbye !see you later.");
        } else if (choice == 3) {
            console.log("Exiting program...");
            break;
        } else {

            
            console.log("involid choise ! Try again   ");

        }

    }
}

mainmanu();