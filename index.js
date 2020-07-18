const express = require("express");
const app = express();

//utilizando ejs como view enginer
app.set('view engine','ejs');
   
app.get("/:nome/:lang",(req, res)=> {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("principal/perfil",{
        nome: nome,
        lang: lang,
        hobbie: "Escutar Musica"
    });
});

app.listen(8080,() => {console.log("App executando...");});