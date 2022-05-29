/** JavaScript para el ejercicio 2 
* Invoca desde una página html el código JS que te pida, mediante formulario, el radio de 
* una circunferencia y te muestre en la propia página tres resultados:
*   a. Longitud de la circunferencia que corresponde a ese radio
*   b. Área del círculo 
*   c. Volumen de la esfera
 * Authora: Esther Hitos Garcia
 * */

//1º forma del boton
//indicamos al pricipio del JS que evento dispara que funcion utilizando el arbol DOM
//document.getElementById("calcular").onclick= /**aqui vendria la function calcular */
//esto se hace cuando la funcion es muy corta (onclick="calcular()")

//2º forma del boton mas optima con addEventListener cogiendo el id del boton
document.getElementById('calcular').addEventListener("click",calcular);


function calcular(){

    // obtener dato (radio)
    let radio = Number(document.getElementById('radio').value);

    if (radio>0) {
        
   
    // realizar cálculos
    // utilizando la clase Math
    let circunferencia = 2 * radio * Math.PI;
    let circulo = radio ** 2 * Math.PI;
    let esfera = radio ** 3 * Math.PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????
//primero nodo li creado y engacharlo al original
//1º crear nodo li
       let nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "La longitud de la circunferencia con radio "+radio+" es : "+circunferencia.toFixed(2);
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);
    
       nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "El área del círculo con radio "+radio+" es : "+circulo.toFixed(2);
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);
       
       nuevoNodo=document.createElement("li");
       //2º meter contenido en el nodo ose el resultado
       nuevoNodo.innerHTML = "El volumen de la esfera con radio "+radio+" es : "+esfera.toFixed(2)+"<br> &nbsp";
       //3º enganchar el nodo en la lista padre 
       document.getElementById("resultados").appendChild(nuevoNodo);
       


/*
    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es : "+circunferencia.toFixed(2);

    document.getElementById("circulo").innerHTML="El área del círculo es : "+circulo.toFixed(2);

    document.getElementById("esfera").innerHTML="El volumen de la esfera es : "+esfera.toFixed(2);
    */
}
}

