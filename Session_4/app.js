
// 1. make a request that loads in the recipes from our own backend
// 2. Capture the response value
// 3. Turn it into JavaScript
// 4. Loop through each recipe
// 5. Create the html components for these recipes
// 6. Populate the text part using innerText
// 7. Append each recipe to the webpage

//loads javascript in the html file, this cretates a get requests
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/recipes");//port 3000 is used for backend,pauses operation until server host 3000 is running
    const recipes = await response.json();
    for (recipe of recipes) {

        //Creates the container that holds the recipe
        const recipeContainer = document.createElement("div");

        //creates the name tag (h3), adds text to it, glue it onto the container
        const nameTag = document.createElement("h3");
        nameTag.innerText = recipe.name;
        recipeContainer.appendChild(nameTag);

        //same with cuisine and time tag
        const cuisineTag = document.createElement("p");
        cuisineTag.innerText = recipe.cuisine;
        recipeContainer.appendChild(cuisineTag)

        const timeTag = document.createElement("p");
        timeTag.innerText = recipe.time;
        recipeContainer.appendChild(timeTag)

        //creates the unordered list element for the ingredients

        const ingredientsListTag = document.createElement("ul");

        //create the list items for the ingredients list

        for (ingredient of recipe.ingredients) {
            const ingredientsListItemTag = document.createElement("li");
            ingredientsListItemTag.innerText = ingredient;
            ingredientsListTag.appendChild(ingredientsListItemTag);

        }


        recipeContainer.appendChild(ingredientsListTag);

        recipeContainer.appendChild(document.createElement("br"));
        //create the order list element
        const stepslistTag = document.createElement("ol");


        //create the list items for the steps list.
        for (step of recipe.steps) {
            const stepslistItemTag = document.createElement("li");
            stepslistItemTag.innerText = step;
            stepslistTag.appendChild(stepslistItemTag);
        }

        recipeContainer.appendChild(stepslistTag);

        const recipeList = document.querySelector("#recipe-list");//# used to get the id value in the html folder in ul
        recipeList.appendChild(recipeContainer);
    }

    const recipeForm = document.querySelector("form");
    recipeForm.addEventListener("submit",(event)=>{
       event.preventDefault();//by default html refreshes page, this prevents it from happening so that when we submit it doesnt glitch
        
       const newRecipe= {};

       newRecipe.name= event.target.name.value;
       newRecipe.cuisine= event.target.cuisine.value; 
       newRecipe.time=event.target.time.value; 
       const ingredientsText = event.target.ingredients.value;
       newRecipe.ingredients= ingredientsText.split(/\r?\n/);//breaks ingredients list into elements in an array
        console.log (newRecipe)

        const stepsText = event.target.steps.value;
        newRecipe.steps = stepsText.split(/\r?\n/);
        
        fetch("http://localhost:3000/recipes",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newRecipe)
        })

    })
   
})



