var got = require("got")
function playfm(station,response){
    got.stream(station).pipe(response)
}

function print(msg){
    console.log(msg)
}

module.exports = {
    playfm,print
}
