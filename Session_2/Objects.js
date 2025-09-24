const employee={
firstName:"Harshaa",
lastName:"Gopi",
department: "CEO",
salary: 10000,
project:["FacebookForCats", "AmazonButBetter", "NotFlix", "InstantGran"]}

console.log(employee.salary)

console.log(employee.hasOwnProperty("firstName")) // true
console.log(employee.hasOwnProperty("height")) // false

employee.firstName= "Jane"
console.log(employee)
employee.department ="Engineering"
console.log(employee)

delete employee.salary
console.log(employee)


const employee = {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Project Manager",
    salary: 60000,
    currentProjects: ["FacebookForCats", "AmazonButBetter", "NotFlix", "InstantGran"],
        address: {
            postCode: "EH6 4UH",
            city: "Edinburgh",
            street: "Newton Crescent",
            number: 15
        }
   }