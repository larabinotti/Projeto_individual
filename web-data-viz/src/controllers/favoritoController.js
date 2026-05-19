var favoritoModel = require("../models/favoritoModel");

function favoritar(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var fkArtigo = req.body.fkArtigoServer;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else if (fkArtigo == undefined) {
        res.status(400).send("O artigo está undefined!");
    } else {
        favoritoModel.favoritar(fkUsuario, fkArtigo)
            .then(function (resultado) {
                console.log(`\nFavoritado com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao favoritar! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function listarPorUsuario(req, res) {
    var fkUsuario = req.params.fkUsuario;

    if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        favoritoModel.listarPorUsuario(fkUsuario)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao listar favoritos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    favoritar,
    listarPorUsuario
};