// const { createElement } = require("react");

// id faching/accesing
let create = document.getElementById("openCreateBtn");
let form = document.getElementById("recipeform");
let backbtn = document.getElementById("backbtn");


// form id's faching/accesing
let recipename = document.getElementById("name"); // id facthing
let ingredients = document.getElementById("ingredients");
let image = document.getElementById("image");
let description = document.getElementById("description");
let calorie = document.getElementById("calorie");
let addbtn = document.getElementById("addbtn");


let allRecipes = JSON.parse(localStorage.getItem("allRecipes")) || [];
displaycard(allRecipes);
let editing = null;
let nextId;

// if (allRecipes.length === 0) {
//     nextId = 1;
// } else {
//     nextId = allRecipes[allRecipes.length - 1].id + 1;
// }

// aaply event listener mean when we are click create button thant time only form is display in the webpage .  
create.addEventListener('click', function () {
    create.style.display = "none";
    form.style.display = "block";
});

// aaply event listener means when we are click back button than time only create is display in the webpage .
backbtn.addEventListener('click', function () {
    create.style.display = "block";
    form.style.display = "none";
});



// aaply event listener mean when we are click add button thant time make one object and that object store in the local storage.
addbtn.addEventListener('click', function () {
    if (editing !== null) {
        // Update existing recipe
        let allRecipes = JSON.parse(localStorage.getItem("allRecipes")) || [];
        let recipe = allRecipes.find(r => r.id === editing);
        if (recipe) {
            recipe.name = document.getElementById("name").value;
            recipe.ingredients = document.getElementById("ingredients").value;
            recipe.image = document.getElementById("image").value;
            recipe.description = document.getElementById("description").value;
            recipe.calorie = document.getElementById("calorie").value;
            localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
            alert("Recipe updated successfully!");
            displaycard(allRecipes);
        }
        editing = null;
    } else {
        if (allRecipes.length === 0) {
            nextId = 1;
        } else {
            nextId = allRecipes[allRecipes.length - 1].id + 1;
        }
        let user = {
            id: nextId,
            name: document.getElementById("name").value,
            ingredients: document.getElementById("ingredients").value,
            image: document.getElementById("image").value,
            description: document.getElementById("description").value,
            calorie: document.getElementById("calorie").value,
            isFav: false
        };

        //image file checking
        document.getElementById("image").addEventListener("change", function () {
            let file = this.files[0];
            if (file && !file.type.startsWith("image/")) {
                alert("Please upload only images!");
                this.value = "";
            }
        });

        //duplicate check
        let found = false;
        for (let recipe of allRecipes) {
            if (recipe.name.toLowerCase() === user.name.toLowerCase()) {
                found = true;
                break;
            }
        }

        if (found) {
            alert("this recipe alread exist ");
        } else {
            allRecipes.push(user);
            localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
            alert("Recipe added successfully!");
            displaycard(allRecipes);
        }
    }

    emtyfunction();
    form.style.display = "none";
    create.style.display = "block";
});


//jaise hi add button click hoga tab usme ke value ko clear karne ke liye
function emtyfunction() {
    recipename.value = "";
    ingredients.value = "";
    image.value = "";
    description.value = "";
    calorie.value = "";
};




function displaycard(allRecipes) {
    let container = document.getElementById("container");
    container.innerHTML = ""; // clear previous cards

    for (let i = 0; i < allRecipes.length; i++) {
        let newdiv = document.createElement("div");

        newdiv.innerHTML = `
    <button type="button" class="favbtn" data-id="${allRecipes[i].id}">
        ${allRecipes[i].isFav ? "★ Favorite" : "Favorite"}
    </button>
    <button type="button" class="editbtn" data-id="${allRecipes[i].id}">Edit</button>
    <button type="button" class="removebtn" data-id="${allRecipes[i].id}">Remove</button>
    <h2>${allRecipes[i].name}</h2>
    <p>${allRecipes[i].ingredients}</p>
    <p>${allRecipes[i].calorie}</p>
    <img src="${allRecipes[i].image}">
    <p>${allRecipes[i].description}</p>
    <button type="button" class="backbtn">Back</button>
`;

        container.appendChild(newdiv);

        //  remove functionality
        let removeBtn = newdiv.querySelector(".removebtn");
        removeBtn.addEventListener("click", function () {
            let id = parseInt(this.dataset.id); // get the recipe id

            // Remove from array
            for (let j = 0; j < allRecipes.length; j++) {
                if (allRecipes[j].id === id) {
                    allRecipes.splice(j, 1);
                    localStorage.setItem("allRecipes", JSON.stringify(allRecipes));//update local storage 
                    break;
                }
            }
            newdiv.remove();
        });

        // Edit functionality
        let editBtn = newdiv.querySelector(".editbtn");
        editBtn.addEventListener("click", function () {
            let id = parseInt(this.dataset.id);
            let recipe = allRecipes.find(r => r.id === id);
            if (recipe) {
                document.getElementById("name").value = recipe.name;
                document.getElementById("ingredients").value = recipe.ingredients;
                // document.getElementById("image").value = recipe.image;
                document.getElementById("description").value = recipe.description;
                document.getElementById("calorie").value = recipe.calorie;
                form.style.display = "block";
                create.style.display = "none";
                editing = id;
            }
        });

        // Favorite functionality
        let FavBtn = newdiv.querySelector(".favbtn");
        FavBtn.addEventListener("click", function () {
            let id = parseInt(this.dataset.id);
            let recipe = allRecipes.find(r => r.id === id);
            if (recipe) {
                recipe.isFav = !recipe.isFav;
                localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
                alert(recipe.isFav ? "Marked as favorite!" : "Removed from favorites!");
                displaycard(allRecipes);
            }
        });
    }
}



document.getElementById("showFavBtn").addEventListener("click", function () {
    let allRecipes = JSON.parse(localStorage.getItem("allRecipes")) || [];
    let favRecipes = allRecipes.filter(r => r.isFav); 
    displaycard(favRecipes); 
});

document.getElementById("showAllBtn").addEventListener("click", function () {
    let allRecipes = JSON.parse(localStorage.getItem("allRecipes")) || [];
    displaycard(allRecipes);
});