/*
let num = Number(prompt("Introduce un numero"))
let counter = 1

while (counter <= num) {
    if (counter % 5 === 0) {
        console.log(counter)
    }
    counter++
} */




/*
let num = Number(prompt("Introduce un numero"))
let counter = 1

do {
if (counter % 5 === 0) {
        console.log(counter)
    }
    counter++
    }
while (counter <= num)
*/



/*
for(let i = 1; i <= 50; i++) {
    if( i % 2 != 0) {
        console.log(i)
    }
} */

//cree un ciclo for que imprima la tabla de multiplicar de 7

/* for(let i = 1; 1 <= 10; i++) {
    console.log(" 7 x " + i + " = " + (7*i))
} */


    
for(let i = 1; i <= 100; i++) {
    if(i >= 20 && i <= 30) {
        continue
    }
    console.log(i)
}