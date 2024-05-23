require("dotenv/config")
require("./src/config/db.js")
const router= require("./src/routes/prodRoute.js")
const express= require("express")

const cors= require("cors")    // yeni
const bodyParser= require('body-parser')   // yeni
const app=express()  // yeni

const PORT=process.env.PORT || 5001
app.use(cors())  // yeni
app.use(bodyParser.json()) // yeni
app.use(express.json())
app.use("/api/products", router)



app.listen(PORT, ()=>{
    console.log("Connected PORT")
})