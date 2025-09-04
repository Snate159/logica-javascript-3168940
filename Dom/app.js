//selecionar los elememtos con los que va a interactuar a la interaccion

const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
const body = document.body;
let counter = 0

//2. Funcion
function incrementar () {
    counter++
    if (counter >= 10) {
        pantalla.style.color = "red"
    }
    if (counter === 30) {
        body.style.backgroundColor = "green"
    }
    pantalla.textContent = counter
}

function decrementar () {
    
    if (counter > 0) {
        counter--
        if (counter < 10) {
            pantalla.style.color = "black"
        }
        pantalla.textContent = counter
    }
}


//Crear el evento
btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)