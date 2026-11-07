function somarDoisNumeros() {
let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
if (!isNaN(n1) && !isNaN(n2)) {
let resultado = n1 + n2;
alert(`A soma dos dois números é: ${resultado}`);
return resultado;
} else {
alert("Por favor, digite números válidos.");
}
}
somarDoisNumeros();