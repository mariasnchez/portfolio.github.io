/** JavaScript para el ejercicio 3 
 * 3- Invoca desde una página html el código JS que te pida, mediante formulario, los tres lados 
 * de un triángulo y te devuelva como resultado si éste es equilátero, isósceles o escaleno.
 * El formulario deberá tener un estilo adecuado, y no admitir que ningún lado esté vacío o no
 * sea numérico
 * Authora: Esther Hitos Garcia
 * */
document.getElementById('compara').addEventListener("click",comparar);
function comparar(){

// entrada de datos

let lado1 =Number(document.getElementById('lado1').value);
let lado2 =Number(document.getElementById('lado2').value);
let lado3 =Number(document.getElementById('lado3').value);

let respuesta="";

// vamos a evaluar que tipo de triángulo es 
if(((lado1>0)&&(lado2>0))&&(lado3>0)){
if ( lado1==lado2 && lado2==lado3 ) {
   respuesta = "es equilátero";
} else {
  if (lado1==lado2 || lado2==lado3 || lado3==lado1) {
      respuesta = "es isósceles";
  } else {
      respuesta = "es escaleno";
  }
}

// mostrar el resultado

document.getElementById('resultadoTipo').innerHTML="El triángulo "+respuesta;

}
}