let resultado = "";

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        resultado += "FizzBuzz<br>";

    } else if (i % 3 === 0) {
        resultado += "Fizz<br>";

    } else if (i % 5 === 0) {
        resultado += "Buzz<br>";

    } else {
        resultado += i + "<br>";
    }
}

document.body.innerHTML += resultado;