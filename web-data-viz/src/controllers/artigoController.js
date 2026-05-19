var artigoModel = require("../models/artigoModel");

function listarTodos(req, res) {
    artigoModel.listarTodos()
        .then(function (resultado) {
            console.log(`\nResultados encontrados: ${resultado.length}`);
            console.log(`Resultados: ${JSON.stringify(resultado)}`);
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao listar! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarPorId(req, res) {
    var id = req.params.id;

    if (id == undefined) {
        res.status(400).send("O id está undefined!");
    } else {
        artigoModel.buscarPorId(id)
            .then(function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);
                res.json(resultado[0]);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao buscar! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    var titulo   = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;

    if (titulo == undefined) {
        res.status(400).send("O título está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("O conteúdo está undefined!");
    } else {
        artigoModel.cadastrar(titulo, conteudo)
            .then(function (resultado) {
                console.log(`\nArtigo cadastrado com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao cadastrar o artigo! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function deletar(req, res) {
    var id = req.params.id;

    if (id == undefined) {
        res.status(400).send("O id está undefined!");
    } else {
        artigoModel.deletar(id)
            .then(function (resultado) {
                console.log(`\nArtigo deletado com sucesso!`);
                console.log(`Resultado: ${JSON.stringify(resultado)}`);
                res.json(resultado);
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao deletar o artigo! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

module.exports = {
    listarTodos,
    buscarPorId,
    cadastrar,
    deletar
};