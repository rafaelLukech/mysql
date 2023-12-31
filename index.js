const { response, query } = require("express")
const e = require("express")
const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

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

//CRUD => CREATE, READ, UPDATE, DELETE

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotas

app.post("/delete/:id", (request, response) => {
    const { id } = request.params

    cont sql = `
        DELETE FROM books
        WHERE id = ${id}

    `

    conn.query(sql, (error) => {
        if (error) {
            return console.log(error)
        }
        response.redirect("/")
    })
})

app.post("/edit/save", (request, reponse) => {
    const { title, pageqty } = request.body

    const sql = `
    UPDATE books
    SET title = '${title}', pageqty = '${pageqty}'
    WHERE id = %{id}

    conn.query(sql, (error => {
    
    }

    }))
    `
})


app.post("/register/save", (request, response) => {
    const { name, pg_qtd } = request.body

    const query =`
    INSERT INTO tablebooks (name, pg_qtd)
    VALUES ('${name}', '${pg_qtd}')
    
    `
    conn.query(query, (error) => {
        if (error){
            console.log(error)
            return
        }
        response.redirect("/")
    })

}

    app.get("/edit/:id", request, response) => {
        const id = request.parms.id
    
        const sql = `
        SELECT = FROM books
        WHERE id = ${id}
        `
        conn.query(sql, (error,data) => {
            if (error) {
                return console.log(error)
            }
    
            const books = data [0]
    
            response.render('edit', { books })
        })
})

app.get("/tablebooks/:idtablebooks",(request, response) => {
    const id = request.params.id

    const sql = `
    SELECT * FROM tablebooks
    WHERE id=${id}
    `
    conn.query(sql, (error, data) => {
        if (error) {
            return console.log(error)
        }
        const book = data[0]

        response.render("tablebooks" , { book } )
    })
})

app.get("/register", (resquest, response) =>{
    response.render("register")
})

app.get("/", (resquest, response) =>{
    const sql = 'SELECT * FROM tablebooks'

    conn.query(sql, (error, data) =>{
        if (error) {
            return console.log(error)
        }

        const books = data
        console.log(books)
        response.render("home", { books })
    })

   
})



//conexao com mysql
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "nodemysql",
    port: 3306
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