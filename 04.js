/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
  var numeroString = num.toString();
  // Reverse the string
  var numeroReversed = numeroString.split('').reverse().join('');
  // Compare the original and reversed strings
  if (numeroString === numeroReversed){
     //console.log("Es capicua");
    return true;
  }else{ 
    //console.log("No Es capicua"); 
    return false;
  }

}

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico