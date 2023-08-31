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
 * ***** EJERCICIO 9 ***** - BinarySearchTree.getHouseValues()
 * 
 * Agregar al prototype de BinarySearchTree la función getHouseValues(), que servirá para obtener el valor total de una casa
 * dependiendo del parámetro que recibas.
 * 
 * Si recibes el parámetro "left", debes retornar la suma de todos los valores que estén a la izquierda del árbol.
 * Si recibes el parámetro "right", debes retornar la suma de todos los valores que estén a la derecha.
 * 
 * EJEMPLOS:
 * 
 * Dado el siguiente árbol:
 *                13
 *             /      \
 *           7         24
 *         /          /   \
 *        6         16     27
 *      /                    \
 *     3                     45
 *      \
 *       4
 *       
 * BinarySearchTree.getHouseValues("left") devuelve => 16
 * BinarySearchTree.getHouseValues("right") devuelve => 88
 * 
 * REQUISITOS:
 *  🟢 La función debe retornar un número representando la suma total de las ramas, dependiendo del orden pedido
 *  🟢 El valor del nodo raíz no debe ser incluido
 */

/**
 * 
 * @param {string} side - El lado del árbol del que se desea obtener el valor total ("left" o "right").
 * @param {number} total - El valor total acumulado en la recursión.
 * @returns {number} - El valor total de las ramas del árbol en el lado especificado.
 */
BinarySearchTree.prototype.getHouseValues = function (side, total = 0) {
  // Tu código aquí:
  
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree
};