/**
 * ***** EJERCICIO 4 ***** - construccionCasas()
 * En este ejercicio, vamos a implementar la función construccionCasas(), que determinará
 * cuántas casas se pueden construir según la cantidad de bolsas de cemento disponibles.
 * La función recibe la cantidad de bolsas de cemento disponibles y devuelve otra función que toma
 * la cantidad de casas que se desean construir.
 *
 * REQUISITOS:
 *  🟢 En caso de que la cantidad de casas que recibimos es 0 o menor, retornar 'Por favor ingresar cuantas casas quieres construir'.
 *  🟢 En caso de que las bolsas sean insuficiente para crear aunque sea una casa, retornar 'No se puede construir casas con esa cantidad de bolsas'.
 *  🟢 En caso de que la cantidad de casas que recibimos sea mayor a la cantidad de bolsas, retornar 'No se puede construir casas con esa cantidad de bolsas'.
 *  🟢 En caso de que la cantidad de casas sea igual a la cantidad de bolsas, retornar true.
 *
 * EJEMPLOS:
 * const casas = construccionCasas(100)
 * casas(10) // Devuelve true
 *
 * const casas = construccionCasas(0)
 * casas(10) // Devuelve "No se puede construir casas con esa cantidad de bolsas"
 */

/**
 * Determina cuántas casas se pueden construir según la cantidad de bolsas de cemento disponibles.
 *
 * @param {number} bolsasDeCemento - La cantidad de bolsas de cemento disponibles.
 * @returns {Function} - Una función que acepta la cantidad de casas a construir y devuelve el resultado según las condiciones.
 */
function construccionCasas(bolsasDeCemento) {
  // Tu código aquí
  return function(cantidadDeCasas) {
    if (cantidadDeCasas <= 0) {
      return "Por favor ingresar cuantas casas quieres construir"
    }

    const bolsasPorCasa = 10
    const casasPosibles = Math.floor(bolsasDeCemento / bolsasPorCasa)

    if (bolsasDeCemento % bolsasPorCasa !== 0) {
      return "No se puede construir casas con esa cantidad de bolsas"
    }

    if (cantidadDeCasas > casasPosibles) {
      return `Solo puedes construir esta cantidad de casas: ${casasPosibles}`
    }

    if (cantidadDeCasas === casasPosibles) {
      return true
    }
  }
}

module.exports = {
  construccionCasas,
}
