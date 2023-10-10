function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(prompt("Capital inicial:"));
    const tasaInteresAnual = parseFloat(prompt("Tasa de interés anual (%):"));
    const periodoAnios = parseInt(prompt("Período de inversión en años:"));

    const tasaInteresDecimal = tasaInteresAnual / 100;
    const montoFinal = capitalInicial * Math.pow(1 + tasaInteresDecimal, periodoAnios);

    alert(`El monto final es de $${montoFinal.toFixed(2)}`);
}
