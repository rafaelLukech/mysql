const { response } = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

//definindo o handlebars como template engine
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

//pasta de arquivos estáticos como css, imagens
app.use(express.static("public"))

//trabalhar com dados no formato json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotas
app.post("/register/save", (request, reponse) =>{
    const { title, pageqty } = request.body

    const query =`
    INSERT INTO books (title, pageqty)
    VALUES ('${books.title}', '${book.pageqty}')
    
    `
    conn.query(query, (error) => {
        if (error){
            console.log(error)
            return
        }
        response.redirect("/")
    })
})

app.get("/register", (resquest, response) =>{
    response.render("home")
})

app.get("/", (resquest, response) =>{
    resposta.render("home")
})

//conexao com mysql
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "nodemysql",
    port: 3307
})
conn.connect ((error) => {
if (error) {
    console.log(error)
    return
}

console.log("conectado ao MySQL!")

app.listen(3000, () => {
console.log("Servidor rodando na porta 3000!")
    })

})