
//BACKEND 
const express = require("express");//calls the express package
const app = express();// runs a complex object code to act as a server
const port= 3000;//port number: a channel used to save our web server over the internet
const fs = require("fs");//fs is file system
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const recipesFilePath = path.join(__dirname,"recipes.json")

app.get("/", (req, res) =>{
    res.send('Hello World! This is the Home Page!');
});//gets the home page

app.get("/recipes",(req,res)=>{
    // read in the json file to get the recipes
    fs.readFile(recipesFilePath, "utf-8", (err,data) =>{
        //reads file through filepath encoding is added as a security measure
        //the err variable holds errors if there are any 
        //the data variable holds the data read in from the file
        //json data must be parsed to turn it into plain javascript
        const recipes = JSON.parse(data);
        res.json(recipes);
    })
}); 

app.post("/recipes",(req,res)=>{
    
    //adding new reciepe via post request and then write back to recipe.json
    const newRecipe=req.body;

    fs.readFile(recipesFilePath,"utf8",(err,data) => {
        const recipes = JSON.parse(data);
        recipes.push(newRecipe);

        fs.writeFile(recipesFilePath,JSON.stringify(recipes), ()=>{});
    })

    res.send("recipes accepted, we are storing your favourite dishes!");
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:", port)
});// starts the server on the port 3000