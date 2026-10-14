let edad = 20;

console.log("tienes " + edad + " años");


let texto = document.getElementById("parrafoUno");
let cancion = document.getElementById("parrafoDos");
let inicio = true; 
let frase = 0;

let = letra [
    "Hoy volvi",
    "A dormir en nuestra cama, y todo sigue igual",
    "El aire y nuestros gatos, nada cambiara",
    "Difícil olvidarte estando aquí",
    "Te quiero ver",
    "Aún te amo y creo que hasta más que ayer",
    "La hiedra venenosa no te deja ver",
    "Me siento mutilada y tan pequeña",
]



cancion.addEventListener ("click", () => {
    cancion.innerText = letra[frase];
    if (frase < letra.length - 1) {
    frase += 1;

})


texto.addEventListener("click", () => {
    cancion.innerText = letra = [frase];
    if (frase < letra.length) {
     frase += 1;   

    }
   
})