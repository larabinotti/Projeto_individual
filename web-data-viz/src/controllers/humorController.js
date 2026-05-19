var humorModel = require("../models/humorModel");

function cadastrar(req, res) {
    var nota = req.body.notaServer;
    var emoji = req.body.emojiServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (nota == undefined) {
        res.status(400).send("A nota está undefined!");
    } else if (emoji == undefined) {
        res.status(400).send("O emoji está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        humorModel.cadastrar(nota, emoji, fkUsuario)
            .then(function (resultado) {
                console.log(`\nHumor cadastrado com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar o humor! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function atualizar(req, res) {
    var nota = req.body.notaServer;
    var emoji = req.body.emojiServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (nota == undefined) {
        res.status(400).send("A nota está undefined!");
    } else if (emoji == undefined) {
        res.status(400).send("O emoji está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        humorModel.atualizar(nota, emoji, fkUsuario)
            .then(function (resultado) {
                console.log(`\nHumor atualizado com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao atualizar o humor! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    cadastrar,
    atualizar
};