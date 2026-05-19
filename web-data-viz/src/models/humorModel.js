var database = require("../database/config")

function cadastrar(nota, emoji, fkUsuario) {
    console.log("ACESSEI O HUMOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nota, emoji, fkUsuario);
    var instrucaoSql = `
        INSERT INTO humor (nota, emoji, fk_usuario) VALUES ('${nota}', '${emoji}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPorUsuario(fkUsuario) {
    console.log("ACESSEI O HUMOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarPorUsuario():", fkUsuario);
    var instrucaoSql = `
        SELECT * FROM humor WHERE fk_usuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function atualizar(nota, emoji, fkUsuario) {
    console.log("ACESSEI O HUMOR MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar():", nota, emoji, fkUsuario);
    var instrucaoSql = `
        UPDATE humor SET nota = '${nota}', emoji = '${emoji}' WHERE fk_usuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    buscarPorUsuario,
    atualizar
};