let numeroIngresado = prompt ("Ingrese el primer numero");
let numeroIngresado2 = prompt ("Ingrese el segundo numero");
let numeroIngresado3 = prompt ("Ingrese el tercer numero");

if (numeroIngresado == numeroIngresado2 && numeroIngresado == numeroIngresado3) {
    alert ("Ganaste el primer premio")
} else if  (numeroIngresado == numeroIngresado2 || numeroIngresado == numeroIngresado3 || numeroIngresado2 == numeroIngresado3) {
    alert ("Ganaste el segundo premio")
}else{
    alert ("Ganaste un helado")
}