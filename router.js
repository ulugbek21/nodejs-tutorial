var students = ["Rustam", "Dadaxon", "Shaxobiddin", "Zamir", "Ahadillo", "Akhmadjon"]

const router = (request, response) => {
    console.log(request)
    if (request.url == "/students") {
        for (let i = 0; i < students.length; i++) {
            response.write("<h" + (i + 1) + ">" + students[i] + "</h" + (i + 1) + ">")
            response.write("\n")

        }
    } else if (request.url == "/just-random-number") {
        response.write(Math.random().toString())
    } else {
        response.writeHead(404)
        response.write("Not found")
    }

    response.end() // end response

}

module.exports = router