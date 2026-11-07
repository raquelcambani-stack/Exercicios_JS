let texto = prompt("Digite um texto para ordenar as palavras:");
if (texto) {
let palavrasOrdenadas = texto
.trim()
.split(/\s+/)
.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
.join(" ");
alert(`Texto original:\n${texto}\n\nPalavras em ordem 
alfabética:\n${palavrasOrdenadas}`);
}