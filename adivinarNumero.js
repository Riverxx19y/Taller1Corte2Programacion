let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
    let intento = parseInt(prompt("Adivina el número entre 1 y 100:"));

    if (isNaN(intento)) {
        alert("Por favor, ingresa un número válido.");
    } else {
        intentos++;

        if (intento === numeroAleatorio) {
            alert(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        } else if (intento < numeroAleatorio) {
            alert("Más alto. Intenta nuevamente.");
            adivinarNumero();
        } else {
            alert("Más bajo. Intenta nuevamente.");
            adivinarNumero();
        }
    }
}

adivinarNumero();
