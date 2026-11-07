
const input = document.getElementById("numeros");
const resultado = document.getElementById("resultado");

input.addEventListener("input", function() {

    let valor = input.value;

    resultado.innerHTML = "";

    for (let i = 0; i < valor.length; i++) {

        let digito = document.createElement("span");

        digito.textContent = valor[i];

        digito.classList.add("digito");

        if (valor[i] === "5") {
            digito.classList.add("rotacionar");
        }

        resultado.appendChild(digito);
    }

});
