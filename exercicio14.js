let texto = prompt("Digite um texto:");

let resultadoTexto = "";

for (let i = 0; i < texto.length; i++) {

    if (!"aeiouAEIOU".includes(texto[i])) {

        resultadoTexto += texto[i];
    }
}

document.getElementById("resultado").textContent = resultadoTexto;