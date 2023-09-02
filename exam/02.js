/**
 * ***** EJERCICIO 2 ***** - calcularImpuestos()
 * En este ejercicio, vamos a implementar la función calcularImpuestos() de forma recursiva.
 * La función debe devolver la suma total con decimales incluidos de las boletas/facturas de impuestos anuales de una casa.
 * Es importante validar la entrada ya que puede haber boletas vacías (que no son arrays), por lo que se debe manejar este caso.
 * Si una persona no tiene impuestos, se debe retornar false. Si tiene impuestos, se deben sumar, y si no es una boleta/factura (array),
 * se debe devolver "Error". En caso de que no haya inconvenientes, se debe devolver el total a pagar.
 *
 * EJEMPLOS:
 * calcularImpuestos([1, 2, 3, 4, 5]) => 15
 * calcularImpuestos({}) => "Error"
 * calcularImpuestos([]) => false
 *
 * REQUISITOS:
 *  🟢 La función debe calcular el total de forma recursiva.
 *  🟢 La función debe retornar el valor numérico correspondiente, incluyendo los decimales.
 *  🟢 Si no hay impuestos, se debe retornar false.
 *  🟢 Si la boleta/factura no es un array, se debe retornar "Error".
 */   

/**
 * Calcula el total de impuestos a pagar de acuerdo a un conjunto de boletas/facturas.
 *
 * @param {Array} boletas - Un array que contiene las boletas/facturas de impuestos anuales.
 * @returns {number | string | boolean} - El total de impuestos a pagar, "Error" si la entrada no es válida o false si no hay impuestos.
 */
const calcularImpuestos = boletas => {
  // Tu código aquí
  
  if(boletas.length === 0) return false
  
  if(!Array.isArray(boletas)) return "Error"

  let result = 0

  for(const ticket of boletas) {
    if(typeof ticket !== "number") return "Error"
    result += ticket
  }
  
  return  result;
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  calcularImpuestos
};
