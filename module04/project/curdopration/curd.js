
//=================================================================================




// let input = require("readline-sync");

// let phoneshop = [];


// function addphone(phoneshop, phone) {
//     phoneshop.push(phone);
// }

// function viewphone(phoneshop, username) {
//     let found = false;
//     for (let i = 0; i < phoneshop.length; i++) {
//         if (phoneshop[i].name === username) {
//             console.log(phoneshop[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         console.log("not found");
//     }
// }

// function updatePhone(phoneshop, username) {
//     let found = false;
//     for (let i = 0; i < phoneshop.length; i++) {
//         if (phoneshop[i].name === username) {
//             let newname = input.question("Enter your new name: ");
//             let newStorage = input.question("Enter your new storage: ");
//             let newPrice = input.question("Enter your new price: ");
//             phoneshop[i].name = newname;
//             phoneshop[i].storage = newStorage;
//             phoneshop[i].price = newPrice;
//             console.log("updated data:", phoneshop[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         console.log("not found");
//     }
// }

// function removePhone(phoneshop, username) {
//     let found = false;
//     for (let i = 0; i < phoneshop.length; i++) {
//         if (phoneshop[i].name === username) {
//             console.log("removed data:", phoneshop[i]);
//             phoneshop.splice(i, 1);
//             found = true;
//             break;
//         }
//     }
//     if (!found) {
//         console.log("not found");
//     }
// }

// while (true) {
//     console.log("\nWelcome to my Phone Shop");
//     console.log("Press 1 for Add Phone");
//     console.log("Press 2 for View Phone");
//     console.log("Press 3 for Update Phone");
//     console.log("Press 4 for Remove Phone");
//     console.log("Press 5 for View All");

//     let choose = input.questionInt("Enter your choice: ");

//     if (choose === 1) {
//         let phone = {};
//         phone.name = input.question("Enter the phone name: ");
//         phone.storage = input.question("Enter the phone storage: ");
//         phone.price = input.question("Enter the phone price: ");
//         addphone(phoneshop, phone);
//         console.log("\nSuccessfully added phone");

//     } else if (choose === 2) {

//         let name = input.question("Enter the phone name: ");
//         viewphone(phoneshop, name);

//     } else if (choose === 3) {
//         let name = input.question("Enter the phone name: ");
//         updatePhone(phoneshop, name);

//     } else if (choose === 4) {
//         let username = input.question("Enter your username phone: ");
//         removePhone(phoneshop, username);

//     } else if (choose === 5) {
//         console.log("All phones:", phoneshop);

//     } else {
//         console.log("Invalid choice");
//     }

//     let phonename = input.question("Type 'no' to end, or press Enter to continue: ");
//     if (phonename.toLowerCase() === "no") {
//         break;
//     }
// }




const input = require("readline-sync");

let phoneshop = [];

// Add Phone
function addPhone() {
    const phone = {
        name: input.question("Enter phone name: "),
        storage: input.question("Enter phone storage: "),
        price: input.question("Enter phone price: ")
    };
    phoneshop.push(phone);
    console.log("✅ Phone added successfully!");
}

// View Phone by Name
function viewPhone() {
    const name = input.question("Enter phone name to view: ");
    const phone = phoneshop.find(p => p.name === name);
    console.log(phone || "❌ Phone not found");
}

// Update Phone
function updatePhone() {
    const name = input.question("Enter phone name to update: ");
    const phone = phoneshop.find(p => p.name === name);
    if (phone) {
        phone.name = input.question("Enter new name: ");
        phone.storage = input.question("Enter new storage: ");
        phone.price = input.question("Enter new price: ");
        console.log("✅ Phone updated:", phone);
    } else {
        console.log("❌ Phone not found");
    }
}

// Remove Phone
function removePhone() {
    const name = input.question("Enter phone name to remove: ");
    const index = phoneshop.findIndex(p => p.name === name);
    if (index !== -1) {
        console.log("✅ Removed phone:", phoneshop.splice(index, 1)[0]);
    } else {
        console.log("❌ Phone not found");
    }
}

// View All Phones
function viewAll() {
    if (phoneshop.length === 0) {
        console.log("No phones in shop.");
    } else {
        console.log("📱 All phones:", phoneshop);
    }
}

// Main Menu
function mainMenu() {
    while (true) {
        console.log("\n=== PHONE SHOP MENU ===");
        console.log("1 → Add Phone");
        console.log("2 → View Phone");
        console.log("3 → Update Phone");
        console.log("4 → Remove Phone");
        console.log("5 → View All");
        console.log("6 → Exit");

        const choice = input.questionInt("Enter your choice: ");

        if (choice === 1) addPhone();
        else if (choice === 2) viewPhone();
        else if (choice === 3) updatePhone();
        else if (choice === 4) removePhone();
        else if (choice === 5) viewAll();
        else if (choice === 6) {
            console.log("👋 Exiting program. Goodbye!");
            break;
        } else {
            console.log("⚠️ Invalid choice! Try again.");
        }
    }
}

// Run the program
mainMenu();
