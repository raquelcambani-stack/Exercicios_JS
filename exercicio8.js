let frase = prompt("Digite uma frase:");

let resultado = document.getElementById("resultado");

for (let i = 1; i <= 5; i++) {

    let palavras = frase.split(" ");

    palavras.sort(() => Math.random() - 0.5);

    let novaFrase = palavras.join(" ");

    resultado.innerHTML += novaFrase + "<br>";
}