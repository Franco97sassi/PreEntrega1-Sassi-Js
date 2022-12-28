let nombre = prompt("Bienvenido al Bar, ingresa tu nombre!")

alert("Bienvenido/a" + " " + nombre)

const arrayComidas = [
    { id: 1, nombre: "pizza", precio: 2500, stock: 100 },
    { id: 2, nombre: "panino", precio: 1900, stock: 200 },
    { id: 3, nombre: "empanada", precio: 280, stock: 300 },
    { id: 4, nombre: "ravioles", precio: 950, stock: 400 },
];

function Comida(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.stock = Number(stock);
}
const com = new Comida(5, "carlitos", 1000, 500)
arrayComidas.push(com)

arrayComidas.forEach((numero) => {
    console.log(numero.nombre)
});

let totalF = 0;

function error() {
    alert("no hay stock");
}


let comidas = prompt("Elige una comida de nuestro menu: \n1-pizza \n2-panino \n3-empanada \n4-ravioles \n5-carlitos \nPresiona ESC para finalizar.")
while (comidas != "ESC") {
    cantidad = prompt("Cuantas unidades quiere comprar?")

    switch (comidas) {
        case "1":
            if (cantidad <= arrayComidas[comidas - 1].stock) {
                alert("una pizza cuesta: " + arrayComidas[comidas - 1].precio);
                totalF += (cantidad * arrayComidas[comidas - 1].precio);
                alert("El total  es $" + totalF);
            }

            else {
                error();
            }
            break;
        case "2":
            if (cantidad <= arrayComidas[comidas - 1].stock) {
                alert("un panino cuesta: " + arrayComidas[comidas - 1].precio);
                totalF += (cantidad * arrayComidas[comidas - 1].precio);
                alert("El total  es $" + totalF);
            }

            else {
                error();
            }
            break;
        case "3":
            if (cantidad <= arrayComidas[comidas - 1].stock) {
                alert("una empanada cuesta: " + arrayComidas[comidas - 1].precio);
                totalF += (cantidad * arrayComidas[comidas - 1].precio);
                alert("El total  es $" + totalF);
            }

            else {
                error();
            }
            break;
        case "4":
            if (cantidad <= arrayComidas[comidas - 1].stock) {
                alert("un plato de ravioles cuesta: " + arrayComidas[comidas - 1].precio);
                totalF += (cantidad * arrayComidas[comidas - 1].precio);
                alert("El total  es $" + totalF);
            }

            else {
                error();
            }
            break;
        case "5":
            if (cantidad <= arrayComidas[comidas - 1].stock) {
                alert("una caja de carlitos cuesta: " + arrayComidas[comidas - 1].precio);
                totalF += (cantidad * arrayComidas[comidas - 1].precio);
                alert("El total  es $" + totalF);
            }

            else {
                error();
            }
            break;

        default:
            alert("Opción no valida");
            break;
    }
    comidas = prompt("Elige una comida de nuestro menu: \n1-pizza \n2-panino \n3-empanada \n4-ravioles \n5-carlitos \nPresiona ESC para finalizar.")


}
alert("el total a pagar es " + totalF)












