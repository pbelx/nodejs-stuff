var express = require("express")
var fileupload = require("express-fileupload")
var cors = require("cors")
var app = express()
app.use(fileupload())
app.use(cors())
var coropt = {
    origins:true
}
app.options('*', cors())

app.get("/",(_,res)=>{
    res.send("We online baby")
})

app.post("/torrent",(req,res)=>{
    // console.log(req)
    var torrent = req.files.tlink
    console.log(torrent)
    var tpath = "/tmp/"+torrent.name

    torrent.mv(tpath,(err)=>{
        if(err){
            res.send("failed to upload")
        }
        res.send("file " + torrent.name + " saved***********************************************")
    })
})

app.listen("8080",()=>{
    console.log("server up")
})
