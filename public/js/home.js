

let pensamentos = [];

let palavrasNegativas = [
    "fracassar",
    "não",
    "nunca",
    "medo",
    "errar",
    "impossível",
    "péssima",
    "horrível",
    "ruim",
    "chata",
    "incopetente",
    "idiota",

];

function adicionar() {
    let input = document.getElementById("inputPensamento");
    let texto = input.value;

    if (texto === "") {
        alert("Digite algo!");
        return;
    }

    pensamentos.push(texto);

    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < pensamentos.length; i++) {
        lista.innerHTML += `<li>${pensamentos[i]}</li>`;
    }
}

function analisar() {
    let negativos = 0;

    for (let i = 0; i < pensamentos.length; i++) {
        let frase = pensamentos[i].toLowerCase();

        for (let j = 0; j < palavrasNegativas.length; j++) {
            if (frase.includes(palavrasNegativas[j])) {
                negativos++;
                break;
            }
        }
    }

    let positivos = pensamentos.length - negativos;

    let mensagem = "";

    if (negativos > positivos) {
        mensagem = "Você não precisa acreditar em tudo o que a ansiedade diz";
    } else {
        mensagem = "Você está conseguindo separar ansiedade de realidade.";
    }

    document.getElementById("resultado").innerHTML = `
        <p>Pensamentos negativos: ${negativos}</p>
        <p>Pensamentos positivos: ${positivos}</p>
        <b>${mensagem}<b>
    `
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        fetch('/entradas-calculadora/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                conteudoServer: pensamentos.join(', '),
                classificacaoServer: negativos > positivos ? 'negativo' : 'positivo',
                fkUsuarioServer: usuario.id
            })
        })
            .then(function (resposta) {
                console.log("Entrada salva com sucesso!");
            })
            .catch(function (erro) {
                console.log("Erro ao salvar entrada: ", erro);
            });
    };
}




