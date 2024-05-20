import express from "express"
import { connectDB } from "./data/database.js";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path'; 
import submitRouter from "./routes/sumbit.js"
import deleterouter from "./routes/delete.js"

const app = express();

connectDB();

app.set("view engine","ejs");

app.listen(3000,()=>{

    console.log("SERVER IS WORKING");
}) 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setting Middlewares

app.use(express.static(path.join("public")));
app.use(express.urlencoded({extended:true}));
app.use(express.static(dirname + '/views')); 
app.use(submitRouter)
app.use(deleterouter)

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/entry",(req,res)=>{
    res.render("entry")
}) 

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/success",(req,res)=>{
    res.render("success")
})

app.get("/enterdata",(req,res)=>{
    res.render("enterdata")
}) 

app.get("/upload",(req,res)=>{
    res.render("upload")
})