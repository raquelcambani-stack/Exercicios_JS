function ehPrimo(n) {
if (n <= 1) return false;
for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) return false;
}
return true;
}
let qtdPrimos = 0, qtdNeutros = 0, somaNegativos = 0;
let contadorNegativos = {};
let executando = true;
while (executando) {
let val = prompt("Digite um número:");
if (val === null) break;
let num = Number(val);
if(val.trim() === "" ||! Number.isFinite(num)){
    alert("Digite um número válido!");
    continue;
}
if (num === 0) qtdNeutros++;
if (ehPrimo(num)) qtdPrimos++;

if (num < 0) {
somaNegativos += num;
contadorNegativos[num] = (contadorNegativos[num] || 0) + 1;
if (contadorNegativos[num] === 3) executando = false;
}
}
alert(`Primos: ${qtdPrimos}\nQuíntuplo dos Neutros: ${qtdNeutros * 5}\nSoma dos Negativos: ${somaNegativos}`)