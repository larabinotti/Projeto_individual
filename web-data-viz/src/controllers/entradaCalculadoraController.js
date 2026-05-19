var entradaCalculadoraModel = require("../models/entradaCalculadoraModel");

function cadastrar(req, res) {
    var conteudo      = req.body.conteudoServer;
    var classificacao = req.body.classificacaoServer;
    var fkUsuario     = req.body.fkUsuarioServer;

    if (conteudo == undefined) {
        res.status(400).send("O conteúdo está undefined!");
    } else if (classificacao == undefined) {
        res.status(400).send("A classificação está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        entradaCalculadoraModel.cadastrar(conteudo, classificacao, fkUsuario)
            .then(function (resultado) {
                console.log(`\nEntrada cadastrada com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar a entrada! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar
};