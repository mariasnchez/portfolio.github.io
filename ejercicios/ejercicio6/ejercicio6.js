/** JavaScript para el ejercicio 6 
 * 
 * Detecta Cadena de caracteres, 
 * y te dice si es palindromo o no
 *  
 * Authora: Esther Hitos Garcia
 * */
document.getElementById('palindromo').addEventListener("click",esPalindromo);
function esPalindromo() {
    let cadena = document.getElementById('caracteres').value;
    let numchar = cadena.length;
    // eliminamos los espacios en blanco y mayusculas /minusculas
    cadena = cadena.toLowerCase();
	var car;
	var cadena_espac = "";
	var cadena_reves = "";

    for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
    if (cadena_espac == cadena_reves) {
            document.getElementById("resultadoPalindromo").innerHTML = "La palabra <strong> SI es Palindromo</strong>";
        
    }
    else {
    document.getElementById("resultadoPalindromo").innerHTML = ( "La palabra <strong> No es Palindromo</strong>");
        
}
}
/***
 * function palindromo() {
    let cadena = document.getElementById("capturaTextoPalindromo").value;
    let numchar = cadena.length;
    
        //Ponemos la cadena en minúsculas
	cadena = cadena.toLowerCase();
	var car;
	var cadena_espac = "";
	var cadena_reves = "";
        //Bucle que recorre toda la cadena y va concatenando en dos variables y eliminando espacios
	for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
                //Si el caracter es un espacio
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
	if (cadena_espac == cadena_reves) {
        document.getElementById("resultado6").innerHTML = "El texto es un palíndromo";

	}
	else {
		document.getElementById("resultado6").innerHTML = "El texto NO es un palíndromo";
	}
    
}
 */
/**function palindrome(str) {
  // Paso 1. Pon en minuscula la cadena y usa el RexEXP para remover los caracteres no deseados en el.
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Paso 2. Utiliza los métodos de encadenamiento con funciones integradas.
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  //  Paso 3. Revisa si reverseStr es estrictamente igual a lorRegStr y regresa un BooLean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
}
 
palindrome("A man, a plan, a canal. Panama");
*/
