const express = require("express")
const router = express.Router()
module.exports=router

const connection = require("../db/dbconnect");

router.get("/display",function(req,resp){
    connection.query("select * from productlist",(err,data)=>{
        if(err){
            resp.status(500).send("error occured"+JSON.stringify(err))
        }
        else{
            resp.render("index",{productdata:data})
        }
    })
})

router.get("/displayaddform",function(req,resp){
    resp.render("emp_add");
})

router.post("/add",(req,resp)=>{
    var pid =req.body.pid
    var pname = req.body.pname
    var price =req.body.price
    connection.query("insert into productlist values(?,?,?)",[pid,pname,price],(err,result)=>{
        if(err){
            resp.status(500).send("data not added"+JSON.stringify(err))
        }
        else{
            resp.redirect("/display")
        }
    })
})
