let nombre = prompt("Ingrese el nombre del jugador:");

let experiencia = 0;
let misiones = 0;
let continuar;

do {
    let puntos = Number(prompt(
        "Ingrese los puntos de experiencia obtenidos:"
    ));

    while (puntos <= 0) {
        puntos = Number(prompt(
            "Cantidad inválida. Ingrese una cantidad mayor que 0:"
        ));
    }

    experiencia = experiencia + puntos;
    misiones++;

    continuar = Number(prompt(
        "¿Desea registrar otra misión? \n"+
        "1. Sí \n" +
        "2. No \n"
    ));

} while (continuar == 1);


let nivel;

if (experiencia < 500) {
    nivel = "Novato";
} else if (experiencia < 1000) {
    nivel = "Avanzado";
} else if (experiencia < 2000) {
    nivel = "Experto";
} else {
    nivel = "Leyenda";
}


document.write("Nombre del jugador: " + nombre + "<br>");
document.write("Misiones completadas: " + misiones + "<br>");
document.write("Experiencia total: " + experiencia + "<br>");
document.write("Nivel alcanzado: " + nivel + "<br>");