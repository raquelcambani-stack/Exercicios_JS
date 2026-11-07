let entrada = prompt("Digite números separados por ponto e vírgula (;):");
if (entrada) {
let numeros = entrada.split(";").map(n => parseFloat(n.trim())).filter(n => 
!isNaN(n));
let soma = numeros.reduce((acc, curr) => acc + curr, 0);
function calcularFatorial(n) {
if (n < 0) return 0;
let fat = 1n; 
for (let i = 1n; i <= BigInt(Math.floor(n)); i++) fat *= i;
return fat;
}
alert(`Soma: ${soma}\nFatorial da soma: ${calcularFatorial(soma).toString()}`);
}