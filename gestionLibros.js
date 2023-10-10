const libros = [];

function agregarLibro() {
    const titulo = prompt("Título del libro:");
    const autor = prompt("Autor del libro:");
    const anoPublicacion = prompt("Año de Publicación del libro:");

    const libro = {
        titulo: titulo,
        autor: autor,
        anoPublicacion: anoPublicacion,
    };

    libros.push(libro);
    alert("Libro agregado con éxito.");
}

function buscarLibroPorTitulo() {
    const tituloBuscar = prompt("Título a buscar:");
    const libroEncontrado = libros.find(libro => libro.titulo === tituloBuscar);

    if (libroEncontrado) {
        alert(`Título: ${libroEncontrado.titulo}, Autor: ${libroEncontrado.autor}, Año de Publicación: ${libroEncontrado.anoPublicacion}`);
    } else {
        alert("Libro no encontrado.");
    }
}

function buscarLibroPorAutor() {
    const autorBuscar = prompt("Autor a buscar:");
    const librosEncontrados = libros.filter(libro => libro.autor === autorBuscar);

    if (librosEncontrados.length > 0) {
        let resultado = "Libros encontrados:\n";
        librosEncontrados.forEach(libro => {
            resultado += `Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.anoPublicacion}\n`;
        });
        alert(resultado);
    } else {
        alert("Libros del autor no encontrados.");
    }
}
