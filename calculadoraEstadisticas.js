function calcularEstadisticas(numeros) {
    let media = calcularMedia(numeros);
    let mediana = calcularMediana(numeros);
    let desviacionEstandar = calcularDesviacionEstandar(numeros);

    console.log(`Media: ${media}`);
    console.log(`Mediana: ${mediana}`);
    console.log(`Desviación Estándar: ${desviacionEstandar}`);
}

function calcularMedia(numeros) {
    let sum = 0;
    for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    return sum / numeros.length;
}

function calcularMediana(numeros) {
    numeros.sort((a, b) => a - b);
    let middle = Math.floor(numeros.length / 2);

    if (numeros.length % 2 === 0) {
        return (numeros[middle - 1] + numeros[middle]) / 2;
    } else {
        return numeros[middle];
    }
}

function calcularDesviacionEstandar(numeros) {
    let media = calcularMedia(numeros);
    let sumDiffSquared = 0;

    for (let i = 0; i < numeros.length; i++) {
        let diff = numeros[i] - media;
        sumDiffSquared += diff * diff;
    }

    return Math.sqrt(sumDiffSquared / numeros.length);
}
