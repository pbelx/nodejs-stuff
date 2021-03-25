var express = require("express")
var cookiep = require("cookie-parser")
var bodyp = require("body-parser")
var cors = require("cors")

var app = express()

var corOptions = {
    origin:true,
    credentials:true
}

app.use(cors(corOptions))
app.use(cookiep())
app.use(bodyp.json())

app.get("/",(req,res)=>{
    res.send("hello z")
})

app.listen(8000)
console.log("server up on 8000")
