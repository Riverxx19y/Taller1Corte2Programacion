let estudiantes = [];

function agregarEstudiante() {
    let nombre = prompt("Nombre del estudiante:");
    let edad = parseInt(prompt("Edad del estudiante:"));
    let id = prompt("Número de Identificación del estudiante:");

    let estudiante = {
        nombre: nombre,
        edad: edad,
        id: id,
    };

    estudiantes.push(estudiante);
    alert("Estudiante registrado con éxito.");
}

function buscarEstudiante() {
    let idBuscar = prompt("Número de Identificación a buscar:");

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].id === idBuscar) {
            alert(`Nombre: ${estudiantes[i].nombre}, Edad: ${estudiantes[i].edad}, Número de Identificación: ${estudiantes[i].id}`);
            return;
        }
    }

    alert("Estudiante no encontrado.");
}
