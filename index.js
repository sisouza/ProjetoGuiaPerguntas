const express = require("express");
const app = express();
const bodyParser  = require("body-parser")

//utilizando ejs como view enginer
app.set('view engine','ejs');
app.use(express.static('public'));

//capturando os dados do form com bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req, res)=> {
    res.render("index");
});

app.get("/perguntar",(req, res)=> {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req, res)=> {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;  
    res.send("Formulario enviado com sucesso" + "titulo:" + titulo + "descricao:"+descricao);
});


app.listen(8080,() => {console.log("App executando...");});