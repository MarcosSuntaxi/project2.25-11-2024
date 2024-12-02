const express = require ('express')

const app = express()

const port = 8080

app.get('/', (req,res) =>{
    res.send("Hello World Marcos Suntaxi ksjsjsjsjs - 2/12/2024")
})

app.listen(port, ()=> {
    console.log("Server Running")
})