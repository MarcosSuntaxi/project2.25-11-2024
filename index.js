const express = require ('express')

const app = express()

const port = 8080

app.get('/', (req,res) =>{
    res.send("HI World Marcos Suntaxi, 15/12/2024")
})

app.listen(port, ()=> {
    console.log("Server Running")
})