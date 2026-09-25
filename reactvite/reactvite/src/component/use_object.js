const employee = {
    id:2,
    name: 'John Doe',
    designation: 'Software Engineer',
    place: 'New York',
    salary: 75000,
    techstack: [{
        lang: "C++",
        server: "Node.js",
        database: "MongoDB"

    },
    {
        lang: "Python",
        server: "Django",
        database: "PostgreSQL"

    },
    {
        lang: "Java",
        server: "Spring Boot",
        database: "MySQL"
    }]

}
console.log(employee)
console.log(employee.id)
console.log(employee.name)
console.log(employee.designation)
console.log(employee.place)
console.log(employee.salary)
console.log(employee.techstack[0])
console.log(employee.techstack[1])
console.log(employee.techstack[2])
console.log(employee.techstack[0].server)
console.log(employee.techstack[1].server)
console.log(employee.techstack[2].server)

