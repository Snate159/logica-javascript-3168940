const mensaje = document.querySelector("#mensaje")
const boton = document.querySelector(".Color")
const mensaje2 = document.querySelector("#mensaje2")
const btnMensaje = document.querySelector(".btnMensaje")


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