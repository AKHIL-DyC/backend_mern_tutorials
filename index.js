import express from "express";
import path from "path";
import mongoose from "mongoose";
//express.static(path.join(path.resolve(),"public")) ye middleware he//path.resolve current directory,join joins
const app=express()
//using middle ware
app.use(express.static(path.join(path.resolve(),"public")))
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://127.0.0.1:27017",{
    dbName:"backend"
}).then(()=>{console.log('Data base connected')})
.catch(()=>{console.log('e')})

const messageschema = new mongoose.Schema({
    name:String,email:String
})

app.set("view engine","ejs")
app.get("/welcome",(req,res)=>{
    res.send("hi welcome")
});
app.get("/success",(req,res)=>{
    res.send(`<h1>YOU saved yourself,congratulation</h1>`)
})
app.get("/",(req,res)=>{
    res.render("index")
})

//adding database by user
app.post("/",async(req,res)=>{
     await Messg.create({name:req.body.name,email:req.body.email}).then(()=>{
        res.redirect("/success")   
     })
})
const Messg=mongoose.model("message",messageschema)//model is just collection in db,here we made one named message
//adding database by dev,not user
app.get("/add",(req,res)=>{
    Messg.create({name:"akhil",email:"3wb@gmail.com"}).then(()=>{res.send("done added by dev")})
})












app.listen(5000,()=>{
    console.log('server is alright!!')
})