/**
 * JavaScript de Ejercicio 7
 * 
 * JavaScript que calcule la división entera 
 * por el algoritmo de Euclides, entre dos números
 * y muestre el resultado del cociente y el resto
 * 
 * Authora: Esther Hitos Garcia
 */
 document.getElementById('Euclides').addEventListener("click",divisionEuclides);
function divisionEuclides() {
    
    let divi =Number (document.getElementById('dividendo').value);
    let divisor =Number( document.getElementById('divisor').value);
    let cociente =0;
    while (divi>=divisor){

       divi -= divisor;
       cociente++;      
    }

    document.getElementById('resultadoDivision').innerHTML = "El cociente es <strong>"+cociente+"</strong> y el resto <strong>"+divi+"</strong>";
}