let nombre = prompt("Bienvenido al Bar, ingresa tu nombre!")

alert("Bienvenido/a" + " " + nombre)

let pizza = 2500;
let panino = 1900;
let empanada = 280;
let ravioles = 950;
let carlitos = 1790;
let totalF = 0;

let comidas = prompt("Elige una comida de nuestro menu: \npizza \nempanada \npanino \ncarlitos \nravioles \nPresiona ESC para finalizar.")
while (comidas != "ESC") {

    switch (comidas) {
        case "pizza":
            let tipo = prompt("Elija de mozarella o de fugazza");
            if (tipo === "mozarella") {
                totalF = parseInt(totalF + pizza)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            } else if (tipo === "fugazza") {
                totalF = parseInt(totalF + pizza)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            }
            else {
                alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
            } 
            break;
        case "panino":
            let tipo2 = prompt("Elija entre familiar o vegetariano");
            if (tipo2 === "familiar") {
                totalF = parseInt(totalF + empanada)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            } else if (tipo2 === "vegetariano") {
                totalF = parseInt(totalF + empanada)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            }
            else {
                alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
            }
            break;
        case "empanada":
            let tipo3 = prompt("Elija entre capresse o de verdura");
            if (tipo3 === "capresse") {
                totalF = parseInt(totalF + panino)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            } else if (tipo3 === "verdura") {
                totalF = parseInt(totalF + panino)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            }
            else {
                alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
            }
            break;
        case "ravioles":
            let tipo4 = prompt("Elija entre de carne o de ricota");
            if (tipo4 === "carne") {
                totalF = parseInt(totalF + ravioles)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            } else if (tipo4 === "ricota") {
                totalF = parseInt(totalF + ravioles)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            }
            else {
                alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
            }
            break;
        case "carlitos":
            let tipo5 = prompt("Elija entre simple o de pollo");
            if (tipo5 === "simple") {
                totalF = parseInt(totalF + carlitos)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            } else if (tipo5 === "pollo") {
                totalF = parseInt(totalF + carlitos)
                alert("El total de tu compra es de" + " " + "$" + totalF);
            }
            else {
                alert("Opcion incorrecta, seleccione opcion valida o ESC para finalizar.");
            }
            break;

        default:
            alert("Opción no valida");
            break;
    }
    comidas= prompt("Elige una comida de nuestro menu: \npizza \nempanada \npanino \ncarlitos \nravioles \nPresiona ESC para finalizar.")


}