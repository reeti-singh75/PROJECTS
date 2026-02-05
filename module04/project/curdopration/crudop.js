// const input = require("readline-sync");

// function mainMenu() {
//     while (true) {
//         console.log("\n=== MAIN MENU ===");
//         console.log("1. Say Hello");
//         console.log("2. Say Goodbye");
//         console.log("3. Exit");

//         let choice = input.questionInt("Enter your choice: ");

//         if (choice === 1) {
//             console.log("Hello! How are you?");
//         } else if (choice === 2) {
//             console.log("Goodbye! See you later.");
//         } else if (choice === 3) {
//             console.log("Exiting program...");
//             break; // exit the loop
//         } else {
//             console.log("Invalid choice! Try again.");
//         }
//     }
// }

// // Run the menu
// mainMenu();



// const input = require("readline-sync");

// let score = 0;

// function mainMenu() {
//     while (true) {
//         console.log("\n=== QUIZ MENU ===");
//         console.log("1. Start Quiz");
//         console.log("2. View Score");
//         console.log("3. Exit");

//         let choice = input.questionInt("Enter your choice: ");

//         if (choice === 1) {
//             startQuiz();
//         } else if (choice === 2) {
//             console.log("Your current score is:", score);
//         } else if (choice === 3) {
//             console.log("Thanks for playing! Exiting...");
//             break;
//         } else {
//             console.log("Invalid choice, try again.");
//         }
//     }
// }

// function startQuiz() {
//     let q1 = input.question("What is 2 + 2? ");
//     if (q1 == "4") score++;

//     let q2 = input.question("Capital of India? ");
//     if (q2.toLowerCase() === "new delhi") score++;

//     let q3 = input.question("What is 5 * 3? ");
//     if (q3 == "15") score++;

//     console.log("Quiz completed!");
// }

// // Run the program
// mainMenu();





// const input = require("readline-sync");

// let score = 0;

// // Array of questions and answers
// const quiz = [
//     { question: "What is 2 + 2? ", answer: "4" },
//     { question: "Capital of India? ", answer: "new delhi" },
//     { question: "What is 5 * 3? ", answer: "15" },
//     { question: "Color of the sky? ", answer: "blue" },
//     { question: "5 - 3 = ? ", answer: "2" }
// ];

// function mainMenu() {
//     while (true) {
//         console.log("\n=== QUIZ MENU ===");
//         console.log("1. Start Quiz");
//         console.log("2. View Score");
//         console.log("3. Exit");

//         let choice = input.questionInt("Enter your choice: ");

//         if (choice === 1) {
//             startQuiz();
//         } else if (choice === 2) {
//             console.log("Your current score is:", score);
//         } else if (choice === 3) {
//             console.log("Thanks for playing! Exiting...");
//             break;
//         } else {
//             console.log("Invalid choice, try again.");
//         }
//     }
// }

// function startQuiz() {
//     for (let i = 0; i < quiz.length; i++) {
//         let userAnswer = input.question(quiz[i].question);
//         if (userAnswer.toLowerCase() === quiz[i].answer.toLowerCase()) {
//             console.log("Correct!");
//             score++;
//         } else {
//             console.log("Wrong! Correct answer is:", quiz[i].answer);
//         }
//     }
//     console.log("Quiz completed!");
// }

// // Run the program
// mainMenu();




const input = require("readline-sync");

// Array to store tasks
let tasks = [];
let taskId = 1; // Unique ID for each task

// Main Menu Function
function mainMenu() {
    while (true) {
        console.log("\n+------------------------+");
        console.log("| 1 → Add Task           |");
        console.log("| 2 → View Tasks         |");
        console.log("| 3 → Update Task        |");
        console.log("| 4 → Delete Task        |");
        console.log("| 5 → View Summary       |");
        console.log("| 6 → Exit               |");
        console.log("+------------------------+");

        let choice = input.questionInt("Enter your choice: ");

        if (choice === 1) {
            addTask();
        } else if (choice === 2) {
            viewTasks();
        } else if (choice === 3) {
            updateTask();
        } else if (choice === 4) {
            deleteTask();
        } else if (choice === 5) {
            viewSummary();
        } else if (choice === 6) {
            console.log("Exiting program... Bye!");
            break;
        } else {
            console.log("Invalid choice! Try again.");
        }
    }
}

// Add Task
function addTask() {
    let name = input.question("Enter task name: ");
    tasks.push({ id: taskId, name: name });
    console.log("Task added successfully!");
    taskId++;
}

// View Tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.log("\nID | Task Name");
    for (let task of tasks) {
        console.log(`${task.id}  | ${task.name}`);
    }
}

// Update Task
function updateTask() {
    let id = input.questionInt("Enter task ID to update: ");
    for (let task of tasks) {
        if (task.id === id) {
            let newName = input.question("Enter new task name: ");
            task.name = newName;
            console.log("Task updated successfully!");
            return;
        }
    }
    console.log("Task not found!");
}

// Delete Task
function deleteTask() {
    let id = input.questionInt("Enter task ID to delete: ");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            console.log("Task deleted successfully!");
            return;
        }
    }
    console.log("Task not found!");
}

// View Summary
function viewSummary() {
    console.log(`Total tasks: ${tasks.length}`);
}

// Run the program
mainMenu();
