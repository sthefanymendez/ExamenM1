# Ejercicios de Programación - Documentación

En este repositorio se encuentran una serie de ejercicios de programación y sus soluciones, así como las funciones y clases asociadas a cada ejercicio. A continuación, se presenta una descripción de cada ejercicio junto con su función correspondiente y una breve explicación de su implementación.

## Ejercicio 1 - party()

**Descripción:** Este ejercicio trata sobre la organización de una fiesta de inauguración de nuevas casas, donde se debe filtrar a los invitados válidos para ingresar a la fiesta. La función `party()` recibe un array de personas en orden de intento de ingreso, y solo deben ser admitidas aquellas con el ticket "VIP" y que sean conocidas ("Known").

**Función:** `party(array)`

La función recibe un array de personas en el formato `{ name: string, ticket: string, status: string }`. Filtra las personas según los criterios de tener ticket "VIP" y ser conocidas, y las añade a una nueva cola (`Queue`) que representa a los invitados válidos. Retorna la cola resultante después de procesar los movimientos.

## Ejercicio 2 - calcularImpuestos()

**Descripción:** Este ejercicio consiste en implementar la función `calcularImpuestos()`, la cual calcula la suma total de impuestos anuales de una persona a partir de un array de boletas/facturas. Debe retornar el total de impuestos o `false` si no hay impuestos, y en caso de errores, retornar "error".

**Función:** `calcularImpuestos(boletas)`

## Ejercicio 3 - casasPorAño()

**Descripción:** La función `casasPorAño()` calcula la cantidad de casas que se pueden construir en base a los años que se le pasen como parámetro. Utiliza una fórmula recursiva que involucra los años y la cantidad de casas por año.

**Función:** `casasPorAño(año)`

## Ejercicio 4 - construccionCasas()

**Descripción:** La función `construccionCasas()` determina cuántas casas se pueden construir con la cantidad de bolsas de cemento que se disponga. Devuelve una función que toma como parámetro la cantidad de casas a construir y retorna `true` si es posible construir esa cantidad o mensajes de error según las condiciones.

**Función:** `construccionCasas(bolsasDeCemento)`

## Ejercicio 5 - tipologiasSeparadas()

**Descripción:** La función `tipologiasSeparadas()` recibe un array con números de tipologías de casas en el orden en que se construyen. Debe retornar un Stack sin tipologías repetidas adyacentes. Si no hay repeticiones o ya están separadas, retorna un mensaje.

**Función:** `tipologiasSeparadas(tipologias)`

## Ejercicio 6 - sortPrimeHouses()

**Descripción:** La función `sortPrimeHouses()` ordena un array de números de menor a mayor y verifica si todos son números primos. Retorna `false` si hay números no primos.

**Función:** `sortPrimeHouses(array)`

## Ejercicio 7 - LinkedList.mapHouses()

**Descripción:** Agrega al prototype de `LinkedList` el método `mapHouses()`, similar al `map()` de arrays. Modifica los valores de la lista actual según el parámetro recibido.

**Función:** `LinkedList.prototype.mapHouses(parametro)`

## Ejercicio 8 - LinkedList.sliceRooms()

**Descripción:** Agrega al prototype de `LinkedList` el método `sliceRooms()`, similar al `slice()` de arrays. Devuelve una nueva lista a partir de dos índices y sus valores respectivos.

**Función:** `LinkedList.prototype.sliceRooms(indexStart, indexEnd)`

## Ejercicio 9 - BinarySearchTree.getHouseValues()

**Descripción:** Agrega al prototype de `BinarySearchTree` la función `getHouseValues()`, que obtiene el valor total de una casa dependiendo del parámetro recibido.

**Función:** `BinarySearchTree.prototype.getHouseValues(side, total)`

## Ejercicio 10 - BinarySearchTree.spotHousePrices()

**Descripción:** Agrega al prototype de `BinarySearchTree` el método `spotHouseValues()`, que retorna un array con los valores del árbol mayores a un número recibido.

**Función:** `BinarySearchTree.prototype.spotHouseValues(num, array)`

---

# Package

## Branches (ramas)

El proyecto tiene dos ramas:

- `empty`: Esta rama estará vacía y libre de soluciones de ejercicios.
- `solution`: Esta rama contendrá las respuestas a los ejercicios.

## Instalación

Para instalar el paquete, puede usar el siguiente comando:

```bash
npm install 
```

o de la forma abreviada:

```bash
npm i 
```

Fíjese si ya tiene instalado las carpetas y archivo, correspondientes a:

```bash
/node_modules
/package-lock.json
```

## Scripts

El paquete incluye el siguiente script:

### Test

Puede ejecutar pruebas en general con el siguiente comando:

```bash
npm test
```

o de forma individual para cada test:

```bash
npm test 01
```

(01) número del test, actualmente sólo cuanto con los test:


```bash
npm test 01
npm test 03
npm test 04
npm test 05
npm test 06
npm test 07
npm test 08
npm test 09
npm test 10
```

This script uses Jest for testing with code coverage disabled (`--collectCoverage=false`).