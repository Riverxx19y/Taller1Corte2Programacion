function generarContraseña() {
    const longitud = parseInt(prompt("Longitud de la contraseña:"));
    const incluirMayusculas = confirm("Incluir mayúsculas?");
    const incluirNumeros = confirm("Incluir números?");
    const incluirCaracteresEspeciales = confirm("Incluir caracteres especiales?");

    const caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const caracteresNumeros = "0123456789";
    const caracteresEspeciales = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let caracteresPermitidos = caracteresMinusculas;

    if (incluirMayusculas) {
        caracteresPermitidos += caracteresMayusculas;
    }

    if (incluirNumeros) {
        caracteresPermitidos += caracteresNumeros;
    }

    if (incluirCaracteresEspeciales) {
        caracteresPermitidos += caracteresEspeciales;
    }

    let contraseñaGenerada = "";

    for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
        contraseñaGenerada += caracterAleatorio;
    }

    alert(`Contraseña generada: ${contraseñaGenerada}`);
}
