let frase = prompt("Digite uma frase:");

let resultadoTexto = "";

for (let i = 0; i < frase.length; i++) {

    if (i % 2 === 0) {

        resultadoTexto += frase[i].toLowerCase();

    } else {

        resultadoTexto += frase[i].toUpperCase();
    }
}

document.getElementById("resultado").textContent = resultadoTexto;