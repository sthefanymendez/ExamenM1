function LinkedList() {
  this.head = null
}

LinkedList.prototype.add = function (valor) {
  var nuevoNodo = new Node(valor)

  if (!this.head) {
    this.head = nuevoNodo
  } else {
    var tailActual = this.head

    while (tailActual.next !== null) {
      tailActual = tailActual.next
    }

    tailActual.next = nuevoNodo
  }
}

LinkedList.prototype.remove = function () {
  if (!this.head) return undefined

  if (this.head.next === null) {
    var unicoNodo = this.head
    this.head = null
    return unicoNodo.value
  }

  var nodoActual = this.head.next
  var nodoPrevious = this.head

  while (nodoActual.next !== null) {
    nodoPrevious = nodoActual
    nodoActual = nodoActual.next
  }

  nodoPrevious.next = null

  return nodoActual.value
}

LinkedList.prototype.search = function (arg) {
  var nodoActual = this.head

  if (nodoActual === null) return null

  while (nodoActual !== null) {
    if (typeof arg === "function") {
      if (arg(nodoActual.value)) return nodoActual.value
    } else if (nodoActual.value === arg) return nodoActual.value

    nodoActual = nodoActual.next
  }

  return null
}

function Node(valor) {
  this.value = valor
  this.next = null
}

/**
 * ***** EJERCICIO 7 ***** - LINKEDLIST.mapHouses()
 * 
 * Agregar al prototype de LinkedList el método mapHouses().
 * Vas a implementar un método parecido al map() de array, dónde tendrás que modificar todos los valores
 * de la lista actual.
 * Recibirás un parámetro que podrá recibir cualquier tipo de dato (pueden ser strings, arrays u objetos).
 * 
 * EJEMPLOS:
 *  Nos envían la siguiente Lista:
 *   ("Casa Moderna") ---> ("Casa Moderna") ---> ("Casa Moderna") --->
 *
 * LinkedList.mapHouses("Cabaña Antigua");
 *
 * La lista de inmuebles pasaría a tener el siguiente valor:
 *
 * ("Cabaña Antigua") ---> ("Cabaña Antigua") ---> ("Cabaña Antigua") --->
 *
 * Recordar que debe poder mapearse la lista por cualquier tipo de dato.
 * No necesitas retornar una nueva lista, tienes que modificar la actual.
 * 
 * REQUISITOS:
 *  🟢 Modificar los valores de la lista actual por lo que recibas por parámetro
 *  🟢 Retornar false si la lista está vacía
 */

/**
 * 
 * @param {*} value - El nuevo valor con el que se actualizarán los elementos de la lista.
 * @returns {boolean} - Retorna false si la lista está vacía, de lo contrario, modifica la lista actual.
 */
LinkedList.prototype.mapHouses = function (value) {
  // Tu código aquí
  if (!this.head) return false

  var list = new LinkedList(value)
  var current = this.head

  while (current) {
    current.value = value;
    current = current.next;
  }

  return list
}

module.exports = {
  LinkedList
};