const numbers = [1,2,3,4,5]

for(number of numbers){
    console.log(numbers)
}
//iterate the even numbers for the number of numbers in the array 
for (number of numbers){
    if(number%2==0){
        console.log(number)
    }
}
//adding an operation to this loop 
for (number of numbers){
    if(number%2==0){
        console.log(number*2)
    }
}
const odd= []
for(number of numbers){
    if(number % 2 ==1){
        odd.push(number)
    }
}
console.log(odd)

const employees = [
    {name: "John Doe", salary: 60000, department: "marketing"},
    {name: "Alice Cooper", salary: 75000, department: "engineering"},
    {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
   ]

   for (employee of employees){
    console.log (employee)
   }

   for(employee of employees){
    console.log(employee.name)
   }

   //calculating average salary
   let total=0
   for(employee of employees){
    total= total+employee.salary; 
   }
   console.log(total/employees.length)