/**
 * ***** EJERCICIO 3 ***** - casasPorAño()
 * En este ejercicio, vamos a implementar la función casasPorAño(), la cual debe retornar
 * la cantidad de casas que se pueden construir por año en base a una secuencia específica.
 * La función recibe el / los años que se desean consultar y devuelve la cantidad de casas que se pueden construir.
 * La secuencia se define de la siguiente manera:
 * - Si el año es 0, la cantidad de casas por año es 0.
 * - Si el año es 1, la cantidad de casas por año es 30.
 * - A partir del 2do año, se calcula con la siguiente fórmula: c(n-1) + c(n / n), que debe devolver 60.
 *
 * EJEMPLOS:
 * casasPorAño(0) => 0
 * casasPorAño(1) => 30
 * casasPorAño(2) => 60
 *
 * REQUISITOS:
 * 🟢 La función debe calcular la cantidad de casas por año de forma recursiva.
 * 🟢 Si el valor n recibido por parámetro es menor a 0, debe retornar false.
 * 🟢 Si el valor n recibido por parámetro es 1, debe retornar 30.
 */

/**
 * Calcula la cantidad de casas por año en base a una secuencia específica.
 *
 * @param {number} n - El año para el cual se desea calcular la cantidad de casas por año.
 * @returns {number | boolean} - La cantidad de casas por año calculada o false si n es menor a 0.
 */
function casasPorAño(n) {
  // Tu código aquí
  
}

module.exports = {
  casasPorAño
};
