console.log("Hello, World")

const meaningOfLife = require('meaning-of-life')
const animalNameGenerator = require('random-animal-name-generator')

console.log(meaningOfLife)

console.log(animalNameGenerator())

function sum(a, b) {
    return a + b
}

result = sum(5, 10)

console.log(result)

const http = require('http')

var students = ["Rustam", "Dadaxon", "Shaxobiddin", "Zamir", "Ahadillo", "Akhmadjon"]

const router = (request, response) => {
    for (let i = 0; i < students.length; i++) {
        response.write("<h" + (i + 1) + ">" + students[i] + "</h" + (i + 1) + ">")
        response.write("\n")

    }
    response.end() // end response

}

const server = http.createServer(router)

server.listen(8000)


// Pseudocode
// 1. Create any array with any information
// 2. Show information in array in the response using for loop
