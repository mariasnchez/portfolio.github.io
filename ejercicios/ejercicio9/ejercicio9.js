/**
 * JavaScript de Ejercicio 9
 * 
 * SCrea en JS un array constante que contenga los nombres de los 12 meses del año. 
 * A partir de ahí, pide mediante formulario, con un campo select, 
 * elegir un número de mes, ydeberá aparecer su nombre en pantalla (
 * 
 * Authora: Esther Hitos Garcia
 */
 document.getElementById('buscar').addEventListener("click",buscarNombre);
function buscarNombre(){

    const meses = ["Enero",
                    "Febrero",
                    "Marzo",
                    "Abril",
                    "Mayo",
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre",
                    "Nobiembre",
                    "Diciembre"]

    let mes =Number(document.getElementById("mes").value);

    let numeroMes = mes -1;
    //let respuesta ="";

    let respuesta = (numeroMes == -1)? "No has elegido numero ": meses[numeroMes];
   /* if(numeroMes==-1)
        respuesta= "No has elegido numero";
    else
        respuesta = meses[numeroMes];*/
    

    document.getElementById("nombreMes").innerHTML=respuesta;
}