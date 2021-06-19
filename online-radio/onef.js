var express = require("express")
var app = express()
var axios = require('axios')
var fs = require("fs")
var cors = require('cors')
var got = require("./gotplay.js")

//radio sec

var gotplay = require("./gotplay")
var stations = require("./stations")


var test = stations.radio.test
var kfm = stations.radio.kfm
var radiocity = stations.radio.radiocity
var sanyu = stations.radio.sanyu
var capital = stations.radio.capital
var xfm = stations.radio.xfm
var rxfm = stations.radio.rxfm
var hot100 = stations.radio.hot100
var crooze = stations.radio.crooze
var power  = stations.radio.power
var lingala1 = stations.radio.lingala1
var lingala2 = stations.radio.lingala2

const coptions = {
  origin: '*',
} 
app.use(cors(coptions))

//app.use(express.static("/var/www/html/qz/qus/"))

app.use(express.static("/var/www/html/tech/", {
    setHeaders: function(res, path) {
    res.set("X-Powered-By",' belx-server-2.0')
}}))

app.use(express.static("/var/www/html/dw",{
    setHeaders: (res,path){
    res.set("X-Powered-By",'belx-server-2.0')
}
}))

app.use((req,res,next)=>{
    //got.ulog(req,res)
//    ua(req,res)
  //  app.use(express.static("/var/www/html/qz/qus/"))
    
    foff(req,res)
    next()
})
app.use((req,res,next)=>{
    gotplay.ulog(req,res)
    next()
})

function ua(req, res) {
    res.set("X-Powered-By","belx-server1.0")
}

function foff(req,res){
    res.set("X-Powered-By","belx-server1.5")
    var ip = req.headers["cf-connecting-ip"]
    var ua = req.headers["user-agent"]
    var ipx = req.socket.remoteAddress
    var date = require("date-and-time")
    var now = new Date
    var url = req.url
    var dd = date.format(now, 'YYYY/MM/DD HH:mm:ss')
    if(ip===undefined && ua !=="HTTPie/0.9.8"){
        res.send("f off")
            fs.appendFile("iplog.json",ua + "\r\n "+ipx + "\n" + url + "\n" + dd + "\n\n",(err)=>{
        if(err) print(err)
        console.log("written ip")
    })
    }
app.get("/crooze",(req,res)=>{
//    gotplay.logreq(req,res)
    gotplay.playfm(crooze,res)
})
app.get("/kfm",(req,res)=>{
//    gotplay.logreq(req,res)
  //  gotplay.ulog(req,res)
    gotplay.playfm(kfm,res)
    
})
app.get("/rxfm",(req,res)=>{
    //gotplay.logreq(req,res)
    //gotplay.ulog(req,res)
    gotplay.playfm(rxfm,res)
})
app.get("/rcity",(req,res)=>{
    //gotplay.logreq(req,res)
    //gotplay.ulog(req,res)
    gotplay.playfm(radiocity,res)
})
app.get("/sanyu",(req,res)=>{
    //gotplay.ulog(req,res)
    gotplay.playfm(sanyu,res)
})
app.get("/capital",(req,res)=>{
   // gotplay.ulog(req,res)
    gotplay.playfm(capital,res)
})

app.get("/xfm",(req,res)=>{
    //gotplay.ulog(req,res)
    gotplay.playfm(xfm,res)
})

app.get("/hot100",(req,res)=>{
    //gotplay.ulog(req,res)
    gotplay.playfm(hot100,res)
})

app.get("/power",(req,res)=>{
   //gotplay.ulog(req,res)
   gotplay.playfm(power,res)
})

app.get("/lingala1",(req,res)=>{
  // gotplay.ulog(req,res)
   gotplay.playfm(lingala1,res)
})

app.get("/lingala2",(req,res)=>{
   //gotplay.ulog(req,res)
   gotplay.playfm(lingala2,res)
})


  
app.get("/ip",(req,res)=>{
    
    
    var ua = req.headers["user-agent"]
//    var ip = req.socket.remoteAddress
    var ip = req.headers["cf-connecting-ip"]
    res.send("<b>"+ip+"</b>"+'<p>'+ ua + "</p>")
})
app.get("/ips",(req,res)=>{
   
    
    var ua = req.headers["user-agent"]
//    var ip = req.socket.remoteAddress
    var ip = req.headers["cf-connecting-ip"]
    res.json({"ip":ip,  "ua":ua })
})

app.get("/ugslog",(req,res)=>{
    fs.readFile('/root/node/cflog.json', function(err, data) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
//    var edata = base64encode(data)
    res.send(data)})})

app.get("/ugbot",(req,res)=>{
    fs.readFile('/root/node/iplog.json', function(err, data) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
//    var edata = base64encode(data)
    res.send(data)})})


app.get("/quote",(req,res)=>{
    
    
    var qurl = "https://zenquotes.io/api/random"
    axios.get(qurl).then(resx=>{
        res.send(resx.data)
    })
})


app.listen(80,"0.0.0.0")
console.log("apache 80")
