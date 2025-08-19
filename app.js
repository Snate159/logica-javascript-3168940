/* // Ejercicio 1
let num = Number(prompt("Introduce un numero"))
if (num < 0) {
    alert("Su numero es: " + num + " y es negativo")
} else if (num >= 0){
    alert ("Su numero es: " + num + " y es positivo")
}*/


/* //Ejercicio 2
let num1 = Number(prompt("Introduce un numero"))
let num2 = Number(prompt("Introduce un segundo numero"))
if (num1 >= 0 && num2 >= 0) {
    console.log("ambos numeros son positivos y son: " + num1 + " y " + num2)
} else if (num1 >= 0) {
    console.log(num1)
} else if (num2 >= 0) {
    console.log(num2)
} else {
    console.log("Wio wio wio, ningun numero es positivo")
} */


/* // Ejercicio 3
let num1 = Number(prompt("Introduce un numero"))
let num2 = Number(prompt("Introduce un segundo numero"))
if (num1 == num2) {
    console.log("son iguales: " + num1 + " * " + num2 + " = " + (num1*num2))
} else if (num1 > num2) {
    console.log("el primer numero es mayor: " + num1 + " - " + num2 + " = " + (num1-num2))
} else {
    console.log("el primero es un numero menor: " + num1 + " + " + num2 + " = " + (num1+num2))
} */


//Ejercicio 4
/* let producto = 50000
let dinero = Number(prompt("El producto cuesta 50000$, con cuanto vas a pagar?"))
if (dinero < producto) {
    let resta = producto-dinero
    console.log("Te falta " + resta + " Para obtener el producto")
} else if (dinero == producto) {
    console.log("Gracias, feliz dia, disfruta tu producto, vuelva pronto (:")
} else {
    let devuelta = dinero-producto
    console.log("Te devolvemos " + devuelta + " Disfruta tu producto")
} */


/* //Ejercicio 5
 let costo = Number(prompt("Cuanto cuesta cada vacuna?"))
 let aplicacion = Number(prompt("Cuanto cuesta la aplicacion de la vacuna?"))
 let vacunas = Number(prompt("Dame el numero de vacunas que se aplicaran"))
 let total = vacunas*(costo+aplicacion)
 console.log("El total gastado en vacunas en el dia es de: " + total) */


/*  //Ejercicio 6
 let cantidad = Number(prompt("Las camisas tienen un precio de 20000, cuantas camisas desea adquirir?"))
 let camisa = 20000

 if (cantidad === 0) {
    console.log("No compraste nada")
 } else {
    let total = camisa*cantidad
    let descuento
    if (cantidad >= 3) {
    descuento = total * 0.20;
    console.log("Se aplica un descuento del 20%")
 } else {
    descuento = total*0.10;
    console.log("Se aplica un descuento del 10%")
 }

 let totalPagar = total - descuento
 console.log("El total a pagar es: " + totalPagar)
} */


/* //Ejercicio 7
let dineroInicial = Number(prompt("Con cuanto dinero deseas iniciar el dia de hoy?"))
let ventas = 800000*4
console.log("Conseguiste 4 ventas de 800000")
let total = dineroInicial+ventas
let pagoAcreedores = total*0.10;
let dineroFinal = total-pagoAcreedores
console.log("Dinero con el que empezaste: " + dineroInicial)
console.log("Pago a acreedores(10%): " + pagoAcreedores)
console.log("Dinero con el que terminaste: " + dineroFinal) */


/* //Ejercicio 8
let dia1 = 200000
let dia2 = 150000
let dia3 = 500000
let dia4 = 250000
let dia5 = 700000
let suma = dia1+dia2+dia3+dia4+dia5
let promedio = suma/5
console.log("El promedio de ventas es: " + promedio) */


//Ejercicio 9
let num1 = Number(prompt("Ingrese el primer numero"))
let num2 = Number(prompt("Ingrese el segundo numero"))
let operacion = prompt("Ingrese la operacion(+, -, *, /)")
let resultado

switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        if (num2 !== 0) {
            resultado = num1 / num2
        } else {
            console.log("No se puede dividir entre 0")
            resultado = null
        } break;
    default:
        console.log("Operacion no valida")
        resultado = null
}

if (resultado !== null) {
    console.log("El resultado es: " + Math.round(resultado))
}