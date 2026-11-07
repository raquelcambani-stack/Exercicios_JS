let texto = prompt("Digite um texto:");

let invertido = texto.split("").reverse().join("");

document.getElementById("resultado").textContent = invertido;