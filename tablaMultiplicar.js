function generarTablaDeMultiplicar() {
    const numeroSeleccionado = parseInt(prompt("Por favor, ingresa un número:"));
    const filasAMostrar = parseInt(prompt("Por favor, ingresa cuántas filas deseas mostrar:"));

    if (isNaN(numeroSeleccionado) || isNaN(filasAMostrar)) {
        alert("Debes ingresar números válidos.");
        return;
    }

    console.log(`Tabla de multiplicar de ${numeroSeleccionado}:`);
    for (let i = 1; i <= filasAMostrar; i++) {
        const resultado = numeroSeleccionado * i;
        console.log(`${numeroSeleccionado} x ${i} = ${resultado}`);
    }
}

generarTablaDeMultiplicar();
