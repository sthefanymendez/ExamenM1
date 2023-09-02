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
 * ***** EJERCICIO 8 ***** - LinkedList.sliceRooms()
 * 
 * Agregar al prototype de LinkedList el método sliceRooms().
 * Este método también será similar al slice() de array, dónde a partir de 2 índices, deberás
 * particionar la lista de habitaciones de una casa.
 * 
 * - Documentación explicando Array.slice() --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * - Los valores que sean iguales a los índices no deben ser incluidos
 * - Los indices siempre van a equivaler a un string con el nombre de una habitación
 * - Recorda que esta el metodo add() ya incluido en el prototype para agregar nuevos nodos y search() para buscar los existentes
 * 
 * EJEMPLOS:
 * Tenemos la siguiente lista:
 * ("Cocina") ---> ("Dormitorio") ---> ("Baño") ---> ("Living") ---> ("Garage") --->
 *
 * LinkedList.sliceRooms("Dormitorio", "Garage") Devuelve => ("Baño") ---> ("Living") --->
 *
 * REQUISITOS:
 *  🟢 Retornar una nueva lista a partir de los índices provistos
 *  🟢 Los valores que coincidan con los indices no deben ser incluidos
 *  🟢 Si ninguno de los índices se encuentra en la lista, retornar false
 *
 * Nota: el primer indice siempre sera menor al segundo.
 */

/**
 * 
 * @param {string} indexStart - El nombre de la habitación de inicio para el corte.
 * @param {string} indexEnd - El nombre de la habitación de fin para el corte.
 * @returns {LinkedList | boolean} - La nueva lista resultante del corte o false si los índices no se encuentran en la lista.
 */
LinkedList.prototype.sliceRooms = function(indexStart, indexEnd) {
  // Tu código aquí
  const startNode = this.search(indexStart)
  const endNode = this.search(indexEnd)

  if (!startNode || !endNode) return false

  var newLinkedList = new LinkedList()
  var currentNode = this.head
  var startIndexFound = false

  while (currentNode !== null) {
    if (currentNode.value === indexStart) {
      startIndexFound = true
      currentNode = currentNode.next
      continue
    }

    if (currentNode.value === indexEnd) break

    if (startIndexFound) newLinkedList.add(currentNode.value)

    currentNode = currentNode.next;
  }

  return newLinkedList
}

module.exports = {
  LinkedList
};