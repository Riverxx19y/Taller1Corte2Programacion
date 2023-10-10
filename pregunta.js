const preguntas = [
    { pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    { pregunta: "¿Quién escribió 'Cien años de soledad'?", respuesta: "Gabriel García Márquez" }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

function comenzarJuego() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    mostrarPregunta();
}

function mostrarPregunta() {
    if (preguntaActual < preguntas.length) {
        const pregunta = preguntas[preguntaActual];
        document.getElementById("pregunta").textContent = pregunta.pregunta;
        document.getElementById("respuesta").value = "";
        document.getElementById("resultado").textContent = "";
    } else {
        mostrarResultado();
    }
}

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById("respuesta").value.trim();
    const respuestaCorrecta = preguntas[preguntaActual].respuesta;

    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        respuestasCorrectas++;
    }

    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultado() {
    document.getElementById("pregunta").textContent = "";
    document.getElementById("respuesta").value = "";
    document.getElementById("resultado").textContent = `Puntuación: ${respuestasCorrectas} de ${preguntas.length} respuestas correctas`;
}

