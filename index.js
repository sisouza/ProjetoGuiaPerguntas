const express = require("express");
const app = express();

//utilizando ejs como view enginer
app.set('view engine','ejs');
app.use(express.static('public'));
   
app.get("/",(req, res)=> {
    res.render("index");
});

app.get("/perguntar",(req, res)=> {
    res.render("perguntar");
});

app.listen(8080,() => {console.log("App executando...");});