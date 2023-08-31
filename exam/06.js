/**
 * ***** EJERCICIO 6 ***** - sortPrimeHouses()
 * 
 * Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
 * retorne false si un número dentro del array no es primo.
 * 
 * EJEMPLOS:
 * Dado el siguiente array:
 * [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
 * sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
 *
 * Dado este otro array:
 * [61, 7, 13, 11, 29, 3]
 * sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
 * 
 * NO utilizar el método sort() de Array!
 * 
 * REQUISITOS:
 *  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
 *  🟢 Si un número dentro del array no es primo, retornar false
 */

/**
 * 
 * @param {number[]} array - El array de números a ordenar y verificar si son primos.
 * @returns {number[] | boolean} - El array ordenado de menor a mayor o false si hay números no primos.
 */
function sortPrimeHouses(array) {
  // Tu código aquí

  // Función para verificar si un número es primo
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  // Verificar si hay números no primos en el array
  for (const num of array) {
    if (!isPrime(num)) {
      return false;
    }
  }

  // Algoritmo de ordenamiento (Bubble Sort)
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array
}

module.exports = {
  sortPrimeHouses
};