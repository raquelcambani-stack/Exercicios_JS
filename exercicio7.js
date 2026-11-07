let palavra = prompt("Digite uma palavra:");

let resultado = document.getElementById("resultado");

for (let i = 1; i <= 5; i++) {

    let letras = palavra.split("");

    letras.sort(() => Math.random() - 0.5);

    let novaPalavra = letras.join("");

    resultado.innerHTML += novaPalavra + "<br>";
}