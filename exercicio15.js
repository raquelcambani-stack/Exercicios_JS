let numeros = [];

let resultado = document.getElementById("resultado");

for (let i = 0; i < 15; i++) {

    let numero = Number(prompt("Digite o número " + (i + 1)));

    numeros.push(numero);
}

let maior = Math.max(...numeros);

if (maior === 0) {

    resultado.textContent = "Não é possível dividir por zero.";

} else {

    let vetorResultado = [];

    for (let i = 0; i < numeros.length; i++) {

        vetorResultado.push(numeros[i] / maior);
    }

    resultado.innerHTML =
        "Maior número: " + maior +
        "<br>Vetor original: " + numeros.join(", ") +
        "<br>Vetor calculado: " + vetorResultado.join(", ");
}