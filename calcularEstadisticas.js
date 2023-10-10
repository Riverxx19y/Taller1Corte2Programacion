function calcularEstadisticas(calificaciones) {
    const promedio = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0) / calificaciones.length;
    const calificacionMasAlta = Math.max(...calificaciones);
    const calificacionMasBaja = Math.min(...calificaciones);

    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Calificación más alta: ${calificacionMasAlta}`);
    console.log(`Calificación más baja: ${calificacionMasBaja}`);
}

const calificaciones = [85, 90, 78, 92, 88];
calcularEstadisticas(calificaciones);
