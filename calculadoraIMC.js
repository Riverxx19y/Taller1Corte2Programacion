function calcularIMC() {
    const peso = parseFloat(prompt("Peso (kg):"));
    const altura = parseFloat(prompt("Altura (m):"));

    const imc = peso / (altura * altura);

    let mensaje = `Tu IMC es ${imc.toFixed(2)}, `;
    if (imc < 18.5) {
        mensaje += "estás en el rango de peso bajo.";
    } else if (imc < 24.9) {
        mensaje += "estás en el rango de peso normal.";
    } else if (imc < 29.9) {
        mensaje += "tienes sobrepeso.";
    } else {
        mensaje += "tienes obesidad.";
    }

    alert(mensaje);
}
