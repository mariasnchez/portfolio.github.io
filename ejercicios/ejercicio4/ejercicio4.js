/** JavaScript para el ejercicio 4 
 * 
 * 4- Invoca desde una página html el código JS que te pida, mediante formulario, el número 
 * de tu dni, y te devuelva la letra que corresponde. 
 * El formulario deberá tener un estilo adecuado y solo admitir una sucesión de 7 u 8 números 
 * enteros
 * 
 * Authora: Esther Hitos Garcia
 * */
document.getElementById('letraDNI').addEventListener("click",letraDni);
function letraDni(){

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

let dni = Number(document.getElementById('dni').value);

let resto = dni % 23;

let letra = LETRAS.substring(resto,resto+1);

document.getElementById('letra').innerHTML = "La letra es: "+letra;
}