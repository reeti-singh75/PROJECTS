let input = require("readline-sync");

let phoneshop = [];

function addphone(phoneshop, phone) {
    phoneshop.push(phone);
}

function viewphone(phoneshop, username) {
    for (let i = 0; i < phoneshop.length; i++) {
        if (phoneshop[i].name === username);
        console.log(phoneshop[i]);
    }
    console.log("not found");
}

function updatePhone(phoneshop, username) {
    for (let i = 0; i < phoneshop.length; i++) {
        if (phoneshop[i].name === username) {
            let newname = input.question("Enter your new name:");
            let newStorage = input.question("Enter your new storage:");
            let newPrice = input.question("Enter your new price:");
            phoneshop[i].name = newname;
            phoneshop[i].storage = newStorage;
            phoneshop[i].price = newPrice;
            console.log("updated data:", phoneshop[i]);
            return;
        }
    }
    console.log("not found");
}

function removePhone(phoneshop, username) {
    for (let i = 0; i < phoneshop.length; i++) {
        if (phoneshop[i].name === username) {
            console.log("removed data:", phoneshop[i]);
            phoneshop.splice(i, 1);
            return;
        }
    }
    console.log("not found");
}

while (true) {
    console.log("\nWelcome my phoneshop");
    console.log("press 1 for add phone:");
    console.log("press 2 for view phone:");
    console.log("press 3 for update phone:");
    console.log("press 4 for remove phone:");
    console.log("press 5 for All view:");

    let choose = input.questionInt("Enter your choice:");

    if (choose === 1) {
        let phone = {};
        phone.name = input.question("Enter the phone name:");
        phone.storage = input.question("Enter the phone storage:");
        phone.price = input.question("Enter the phone price:");
        addphone(phoneshop, phone);
        console.log("\nSucessful added phone");

    } else if (choose === 2) {
        let name = input.question("Enter the phone name:");
        viewphone(phoneshop, name);
    } else if (choose === 3) {
        let name = input.question("Enter the phone name:");
        updatePhone(phoneshop, name);
    } else if (choose === 4) {
        let username = input.question("Enter your usename phone:");
        removePhone(phoneshop, username);
    } else if (choose === 5) {
        console.log("All view:", phoneshop);
    } else {
        console.log("invalid choice");
    }
    let phonename = input.question("End and start continue:");
    if (phonename.toLowerCase() === "no") {
        break;
    }
}