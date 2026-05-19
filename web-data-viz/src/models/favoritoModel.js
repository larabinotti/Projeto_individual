var database = require("../database/config")

function favoritar(fkUsuario, fkArtigo) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function favoritar():", fkUsuario, fkArtigo);
    var instrucaoSql = `
        INSERT INTO favorito (fk_usuario, fk_artigo, favoritado_em) VALUES ('${fkUsuario}', '${fkArtigo}', NOW());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(fkUsuario) {
    console.log("ACESSEI O FAVORITO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario():", fkUsuario);
    var instrucaoSql = `
        SELECT favorito.id, artigo.titulo, artigo.conteudo, favorito.favoritado_em
        FROM favorito
        JOIN artigo ON favorito.fk_artigo = artigo.id
        WHERE favorito.fk_usuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    favoritar,
    listarPorUsuario
};