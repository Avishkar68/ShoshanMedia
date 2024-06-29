const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const ejs = require("ejs")


if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path:"backend/config/config.env"})
}


//using middlewares..
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.set("view engine","ejs")
app.get("/api/v1/login",(req,res)=>{
    res.render("login")
})

//Importing routes..
const post = require("./routes/post")
const user = require("./routes/user")

//using routes..
app.use("/api/v1",post)
app.use("/api/v1",user) 

// localhost:5173/api/v1

module.exports = app
