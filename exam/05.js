function Stack() {
  this.array = []
}

Stack.prototype.push = function (elemento) {
  this.array.push(elemento)
}

Stack.prototype.pop = function () {
  return this.array.pop()
}

Stack.prototype.size = function () {
  return this.array.length
}

/**
 * ***** EJERCICIO 5 ***** - tipologiasSeparadas()
 * En este ejercicio, vamos a implementar la función tipologiasSeparadas(), que recibirá un array
 * con los números de tipologías en el orden en que se van a construir.
 * El objetivo es utilizar un Stack() para detectar si es necesario separar las tipologías que se repiten, evitando tener ...
 * dos tipologías iguales una al lado de la otra en una misma manzana.
 *
 * EJEMPLOS:
 * const arr = [1, 2, 2, 3, 3, 6, 4, 5]
 * tipologiasSeparadas(arr) // Devuelve [1, 2, 3, 6, 4, 5, 2, 3]
 *
 * REQUISITOS:
 *  🟢 La función debe crear y retornar un Stack creado con las tipologías de manera que no haya repetidas adyacentes.
 *  🟢 El Stack que devuelve debe ser una instancia de la clase Stack.
 *  🟢 Si no hay tipologías repetidas o ya están separadas correctamente, debe retornar "No hay tipologías repetidas".
 *  🟢 Si se recibe un array vacío, debe retornar "Tipologías inexistentes".
 */

/**
 * Crea un Stack con las tipologías de manera que no haya repetidas adyacentes.
 *
 * @param {number[]} tipologias - El array de números de tipologías en el orden en que se van a construir.
 * @returns {Stack | string} - Un Stack creado con las tipologías o mensajes si no hay repeticiones o si el array es vacío.
 */
function tipologiasSeparadas(tipologias) {
  // Tu código aquí
  var miStack = new Stack()

  var repetidos = []

  if (tipologias.length === 0) return 'Tipologías inexistentes'

  for (var i = 0; i < tipologias.length; i++) {
    if (tipologias[i] === tipologias[i + 1])
      repetidos.push(tipologias[i])
    else miStack.push(tipologias[i])
  }

  for (var j = 0; j < repetidos.length; j++) {
    if (repetidos.length > 0) miStack.push(repetidos[j])
  }

  if (repetidos.length === 0) return "No hay tipologías repetidas"

  return miStack
}

module.exports = {
  Stack,
  tipologiasSeparadas,
}
