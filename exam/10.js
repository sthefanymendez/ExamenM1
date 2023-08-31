function BinarySearchTree(valor) {
  this.value = valor;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {

  if(value < this.value){
    if(this.left === null){
      var newTree = new BinarySearchTree(value);
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  } else {
    if(this.right === null){
      var newTree = new BinarySearchTree(value);
      this.right = newTree;
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.size = function() {
  if(this.value === null){
    return 0;
  }

  if(this.left === null && this.right === null){
    return 1;
  }

  if(this.left === null){
    return 1 + this.right.size();
  }

  if(this.right === null){
    return 1 + this.left.size();
  }

  return 1 + this.left.size() + this.right.size();
}

/**
 * 🔟 ***** EJERCICIO 10 ***** - BinarySearchTree.spotHousePrices() 🔟
 * 
 * Agregar al prototype de BinarySearchTree el método spotHouseValues(), el cual deberá retornar un array con los
 * valores del árbol que sean mayores al número recibido por parámetros.
 * 
 * EJEMPLOS:
 * 
 * Dado el siguiente árbol: 
 *                6
 *             /      \
 *           4         8
 *         /  \       /  \
 *        3    5     7    9
 * 
 * nuevaCasa.spotHousePrices(6, []) => [8, 7, 9]
 * nuevaCasa.spotHousePrices(4, []) => [6, 5, 8, 7, 9]
 * 
 *⚠️ ATENCION ⚠️
 * - Para solucionar el ejercicio, deben recorrer el arbol de manera depth-first/pre-order
 *   (o sea, lo recorren de izquierda a derecha)
 * - El array sera provisto via parametros
 * 
 * REQUISITOS:
 *  🟢 Devolver un array con los numeros mayores al recibido por parametros
 *  🟢 Recorrer el arbol de manera depth-first pre-order
 */

/**  
 * 
 * @param {number} target - El número que se usará como referencia para identificar los valores mayores.
 * @param {number[]} result - El array en el que se almacenarán los valores mayores encontrados.
 * @returns {number[]} - Un array con los valores mayores al número de referencia.
 */
BinarySearchTree.prototype.spotHousePrices = function (target, result = []) {
  // Tu código aquí:
  
}

module.exports = {
  BinarySearchTree
};
