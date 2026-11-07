let nome = prompt("Digite o seu nome:");

let quantidade = 0;
let resultadoTexto = "";

for (let i = 0; i < nome.length; i++) {

    let letra = nome[i];

    if ("aeiouAEIOU".includes(letra)) {

        quantidade++;

        resultadoTexto += "<u>" + letra + "</u>";

    } else {

        resultadoTexto += letra;
    }
}

let resultado = document.getElementById("resultado");

resultado.innerHTML = "Nome: " + resultadoTexto +
    "<br>Quantidade de vogais: " + quantidade;