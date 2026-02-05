// Load recipes from local storage
let allRecipes = JSON.parse(localStorage.getItem("allRecipes")) || [];
displayCard(allRecipes);

// ... (Other code remains the same)

// apply event listener when we click add button
addbtn.addEventListener('click', function () {
    // 1. Get the next ID correctly
    let nextId = allRecipes.length > 0 ? allRecipes[allRecipes.length - 1].id + 1 : 1;

    let user = {
        id: nextId, // use the new ID
        name: document.getElementById("name").value,
        ingredients: document.getElementById("ingredients").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
    };

    // 2. Add duplicate check
    let found = allRecipes.some(recipe => recipe.name.toLowerCase() === user.name.toLowerCase());

    if (found) {
        alert("This recipe already exists.");
    } else {
        allRecipes.push(user);
        localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
        alert("Recipe added successfully!");
        displayCard(allRecipes);
    }

    emtyfunction();
    form.style.display = "none";
    create.style.display = "block";
});

// 3. Move image validation outside the click listener
document.getElementById("image").addEventListener("change", function () {
    let file = this.files[0];
    if (file && !file.type.startsWith("image/")) {
        alert("Please upload only images!");
        this.value = "";
    }
});


function displayCard(allRecipes) {
    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < allRecipes.length; i++) {
        let newdiv = document.createElement("div");

        // 4. Removed the Back button from here
        newdiv.innerHTML = `
            <button type="button" id="addbtn">Favorite</button>
            <button type="button" id="editbtn">Edit</button>
            <button type="button" class="removebtn" data-id="${allRecipes[i].id}">Remove</button>
            <img src="${allRecipes[i].image}">
            <p>${allRecipes[i].description}</p>
        `;

        container.appendChild(newdiv);

        // 5. Use filter() to remove items efficiently
        let removeBtn = newdiv.querySelector(".removebtn");
        removeBtn.addEventListener("click", function() {
            let id = parseInt(this.dataset.id);
            allRecipes = allRecipes.filter(recipe => recipe.id !== id);
            localStorage.setItem("allRecipes", JSON.stringify(allRecipes));
            displayCard(allRecipes); // Re-render the cards
        });
    }
}