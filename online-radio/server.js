var gotplay = require("./gotplay")
var stations = require("./stations")
var express = require("express")


var app = express()

var test = stations.radio.test
var kfm = stations.radio.kfm
var radiocity = stations.radio.radiocity
var sanyu = stations.radio.sanyu
var capital = stations.radio.capital

app.get("/test",(req,res)=>{
    gotplay.playfm(test,res)
})
app.get("/kfm",(req,res)=>{
    
    gotplay.playfm(kfm,res)
})
app.get("/rcity",(req,res)=>{
    gotplay.playfm(radiocity,res)
})
app.get("/sanyu",(req,res)=>{
    gotplay.playfm(sanyu,res)
})
app.get("/capital",(req,res)=>{
    gotplay.playfm(capital,res)
})

app.listen(9000)
gotplay.print("server up on 9000")

