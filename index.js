import express from "express"
import mysql from "mysql2"

const app= express()

const conexion = mysql.createConnection({
 host: 'localhost',
 user:'root',
 database:'productos',
 password: "uzumymw7"


})
 

app.get("/productos", (req, res)=>{
    conexion.query("SELECT * FROM products", (err, results) =>{
    if(err) {
        console.log(err)
    }

res.json(results)
    })
})



app.listen(3000, ()=> {

    console.log("Servidor levantado en el puerto 3000")

})