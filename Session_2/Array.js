//array 
const ingredients =["Chicken","Butter","salt","Pepper"]
const Numbers= [1,9,12,33]
console.log(ingredients)
console.log(ingredients[0])//outputting array for a particular element
console.log(ingredients[1])
//replacing an element in the array
ingredients[0]="tofu"
console.log(ingredients[0])
//adding to the array
ingredients.push("Mushroom")
console.log(ingredients)
//removing from array
const removed =ingredients.pop()
console.log(ingredients)
console.log(removed)
