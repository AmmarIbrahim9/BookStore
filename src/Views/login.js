const mysql = require("mysql");
const express = require("express");
const bodyparser = require("body-parser");
const encoder = bodyparser.urlencoded();
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user : "root",
    password :"ammar123",
    database: "bookswap"
})


connection.connect(function(error)
{
    if(error) throw error
    else console.log("connected successfully ")
})

app.get("/",function(req,res)
{
    req.sendFile(__dirname +"/login.jsx");
}
)

app.post("/",encoder,function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    connection.query("select * from users where email= ? and password = ? ",[email,password], function(error,results,fields){
        if (results.length > 0 ){
            res.redirect("/<Main.jsx");
        }else{
            res.redirect("/");
            res.send("invalid username or password ");
        }
        res.end();
        

    })



})

app.get("/Main",function(req,res)
{
    req.sendFile(__dirname +"/Main.jsx");
}
)



app.listen(3000);