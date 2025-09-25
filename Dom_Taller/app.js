const mensaje = document.querySelector("#mensaje")
const boton = document.querySelector(".Color")
const mensaje2 = document.querySelector("#mensaje2")
const btnMensaje = document.querySelector(".btnMensaje")
const input = document.querySelector("#input")
const btnMostrar = document.querySelector(".btnMostrar")
const resultado = document.querySelector("#resultado")
const rojo = document.querySelector(".rojo")
const verde = document.querySelector(".verde")
const amarillo = document.querySelector(".amarillo")
const formulario = document.querySelector("#formulario")
const resultado2 = document.querySelector("#resultado2")




mensaje.textContent = "Hola, este texto fue modificado con JavaScript"




boton.addEventListener("click", function () {
    document.body.style.backgroundColor = "blue"
})


btnMensaje.addEventListener("click", function () {
    if (mensaje2.style.display === "none") {
        mensaje2.style.display = "block"
    } else {
        mensaje2.style.display = "none"
    }
})

btnMostrar.addEventListener("click", function () {
    const texto = input.value
    resultado.textContent = texto
})

rojo.addEventListener("click", function () {
    document.body.style.backgroundColor = "red"
})

verde.addEventListener("click", function () {
    document.body.style.backgroundColor = "green"
})

amarillo.addEventListener("click", function () {
    document.body.style.backgroundColor = "yellow"
})

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    resultado2.textContent = `Hola ${nombre}, tienes ${edad} años.`
})
