let nombre = prompt("Bienvenido al Bar, ingresa tu nombre!")

alert("Bienvenido/a" + " " + nombre)

const pizza = 2500;
const pizza2 = 3000;

const panino = 1900;
const panino2 = 2000;

const empanada = 280;
const empanada2 = 300;

const ravioles = 950;
const ravioles2 = 1000;

const carlitos = 1790;
const carlitos2 = 2000;

let totalF = 0;

function error(){
    alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
}


let comidas = prompt("Elige una comida de nuestro menu: \npizza \nempanada \npanino \ncarlitos \nravioles \nPresiona ESC para finalizar.")
while (comidas != "ESC") {

    switch (comidas) {
        case "pizza":
            let tipo = prompt("Elija de mozarella o de fugazza");
            if (tipo === "mozarella") {
                totalF = parseInt(totalF + pizza)
            } else if (tipo === "fugazza") {
                totalF = parseInt(totalF + pizza2)
            }
            else {
                error();
            } 
            break;
        case "panino":
            let tipo2 = prompt("Elija entre familiar o vegetariano");
            if (tipo2 === "familiar") {
                totalF = parseInt(totalF + panino)
            } else if (tipo2 === "vegetariano") {
                totalF = parseInt(totalF + panino2)
            }
            else {
                error();
            }
            break;
        case "empanada":
            let tipo3 = prompt("Elija entre capresse o de verdura");
            if (tipo3 === "capresse") {
                totalF = parseInt(totalF + empanada)
            } else if (tipo3 === "verdura") {
                totalF = parseInt(totalF + empanada2)
            }
            else {
                error();
            }
            break;
        case "ravioles":
            let tipo4 = prompt("Elija entre de carne o de ricota");
            if (tipo4 === "carne") {
                totalF = parseInt(totalF + ravioles)
            } else if (tipo4 === "ricota") {
                totalF = parseInt(totalF + ravioles2)
            }
            else {
                error();
            }
            break;
        case "carlitos":
            let tipo5 = prompt("Elija entre simple o de pollo");
            if (tipo5 === "simple") {
                totalF = parseInt(totalF + carlitos)
            } else if (tipo5 === "pollo") {
                totalF = parseInt(totalF + carlitos2)
            }
            else {
                error();
            }
            break;

        default:
            alert("Opción no valida");
            break;
    }
    comidas= prompt("Elige una comida de nuestro menu: \npizza \nempanada \npanino \ncarlitos \nravioles \nPresiona ESC para finalizar.")


} 
alert ("el total a pagar es "+totalF)