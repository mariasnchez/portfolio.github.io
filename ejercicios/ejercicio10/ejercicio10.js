/**
 * JavaScript de Ejercicio 10
 * 
 *  JSON para almacenar los
 *  nombres en español y en inglés, y en el select 
 *  deberá aparecer para elegir, un mes en
 *  español, y mostrará su traducción al inglés
 * 
 * Authora: Esther Hitos Garcia
 */
 document.getElementById('traducir').addEventListener("click",TraducirNombre);
 function TraducirNombre(){

    const meses = {"Enero":"January",
                    "Febrero":"February",
                    "Marzo":"March",
                    "Abril":"April",
                    "Mayo":"March",
                    "Junio":"Juny",
                    "Julio":"July",
                    "Agosto":"August",
                    "Septiembre":"September",
                    "Octubre":"October",
                    "Nobiembre":"November",
                    "Diciembre":"December"}

    let mes = document.getElementById("mes").value;

 
    //let respuesta ="";

    let respuesta = (mes == "error")? "No has elegido mes. ": meses[mes];//hay que poner la variable
   /* if(numeroMes==-1)
        respuesta= "No has elegido numero";
    else
        respuesta = meses[numeroMes];*/
    

    document.getElementById("nombreMes").innerHTML=respuesta;
}