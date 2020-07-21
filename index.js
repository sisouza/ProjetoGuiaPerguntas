const express = require("express");
const app = express();
const bodyParser  = require("body-parser")
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
//testando a conexao
connection
    .authenticate()
    .then(() => {
        console.log("Conexão estabelecida");
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })
//utilizando ejs como view enginer
app.set('view engine','ejs');
app.use(express.static('public'));

//capturando os dados do form com bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//rotas
app.get("/",(req, res)=> {
            //listar perguntas    
    Pergunta.findAll({ rew:true, order:[
        ['id','DESC']
    ]}).then(perguntas =>{
        res.render("index",{
            perguntas: perguntas
        });
    });   
});

app.get("/perguntar",(req, res)=> {
    res.render("perguntar");
});

app.post("/salvarpergunta",(req, res)=> {

//capturando os dados do form html
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

//capturando os dados nas vars acima e salvando no banco de dados    
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(()=>{
        res.redirect("/");
    });      
});

app.get("/pergunta/:id",(req,res) =>{
    var id = req.param.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta =>{
        if(pergunta != undefined){
            res.render("pergunta");
        }else{
           res.redirect("/"); 
        }
    });
})

app.listen(8080,() => {console.log("App executando...");});