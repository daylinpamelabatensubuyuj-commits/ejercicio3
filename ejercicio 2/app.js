let equipo1 = prompt("Ingrese el nombre del primer equipo:");
let equipo2 = prompt("Ingrese el nombre del segundo equipo:");

let goles1 = Number(prompt("Ingrese los goles de " + equipo1 + ":"));
let goles2 = Number(prompt("Ingrese los goles de " + equipo2 + ":"));

let puntos1 = 0;
let puntos2 = 0;
let diferencia = 0;
let resultado;

if (goles1 > goles2) {

    diferencia = goles1 - goles2;
    resultado = "Ganó " + equipo1;

    puntos1 = 3;
    puntos2 = 0;

} else if (goles2 > goles1) {

    diferencia = goles2 - goles1;
    resultado = "Ganó " + equipo2;

    puntos1 = 0;
    puntos2 = 3;

} else {

    resultado = "Empate";

    puntos1 = 1;
    puntos2 = 1;
}


document.write("Equipo 1: " + equipo1 + "<br>");
document.write("Goles: " + goles1 + "<br>");
document.write("Puntos: " + puntos1 + "<br>");
document.write("<br>");

document.write("Equipo 2: " + equipo2 + "<br>");
document.write("Goles: " + goles2 + "<br>");
document.write("Puntos: " + puntos2 + "<br>");
document.write("<br>");

document.write("Resultado: " + resultado + "<br>");

if (goles1 != goles2) {
    document.write("Diferencia de goles: " + diferencia + "<br>");
}