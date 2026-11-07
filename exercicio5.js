let entrada = prompt("Digite vários números separados por vírgula:");
let pares = [], impares = [];
if (entrada) {
let lista = entrada.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
lista.forEach(num => {
if (num % 2 === 0) pares.push(num);
else impares.push(num);
});
console.log("Pares:", pares);
console.log("Ímpares:", impares);
alert(`Pares: [${pares.join(", ")}]\nÍmpares: [${impares.join(", ")}]`);
}