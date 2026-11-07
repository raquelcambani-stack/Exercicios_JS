let entrada = prompt("Digite uma palavra ou número:");
if (entrada) {
let limpo = entrada.toLowerCase().replace(/[^a-z0-9]/g, "");
let invertido = limpo.split("").reverse().join("");
if (limpo === invertido) {
alert(`"${entrada}" é um Palíndromo!`);
} else {
alert(`"${entrada}" NÃO é um Palíndromo.`);
}
}