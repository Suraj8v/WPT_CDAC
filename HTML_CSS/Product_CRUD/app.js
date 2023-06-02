const express = require("express")
const app = express()
var path = require("path")
const bodyparser = require("body-parser")
const route = require("./router/routers")

app.set("view engine","ejs")


app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));







app.use(bodyparser.urlencoded({extended:false}))
app.use("/",route)

app.listen(3003,()=>{console.log("sourabh is started")})