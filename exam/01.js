function Queue() {
  this.array = [];
}

Queue.prototype.enqueue = function(elemento) {
  return this.array.push(elemento);
}

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

Queue.prototype.size = function() {
  return this.array.length;
}

/**
 * ***** EJERCICIO 1 ***** - party()
 * ¡Tenemos un problema!
 * Se está organizando una fiesta para inaugurar las nuevas casas, pero hay personas desconocidas que intentan ingresar.
 * La función recibe un array que representa la fila de personas en orden que intentan ingresar.
 * Solo deben ingresar aquellos con el ticket "VIP" y que sean Conocidos (Known).
 * Las personas válidas se añadirán a una nueva QUEUE, donde se filtrarán los invitados correctos.
 *
 * El array de movimientos tiene el siguiente formato:
 * [
 *   { name: "Carol", ticket: "FALSE", status: "Unknown" },
 *   { name: "Gonzalo", ticket: "VIP", status: "Known" },
 *   { name: "Micaias", ticket: "VIP", status: "Unknown" }
 * ]
 * Donde "ticket" y "status" representan el ingreso de una persona a la nueva QUEUE.
 * La función debe devolver la QUEUE que representa a los invitados válidos para ingresar.
 *
 * EJEMPLO:
 * party([
 *   { name: "Carol", ticket: "FALSE", status: "Unknown" },
 *   { name: "Gonzalo", ticket: "VIP", status: "Known" },
 *   { name: "Micaias", ticket: "VIP", status: "Unknown" }
 * ]); // Devuelve la QUEUE [{ name: "Gonzalo", ticket: "VIP", status: "Known" }]
 *
 * REQUISITOS:
 *  🟢 La función debe devolver la QUEUE resultante después de procesar los movimientos.
 *  🟢 Si la función intenta retirar a una persona cuando la QUEUE está vacía, debe devolver false.
 *  🟢 La QUEUE que devuelve la función debe ser una instancia de la clase QUEUE.
 */

/**
 * Filtra y devuelve una cola de invitados válidos que tengan ticket "VIP" y status "Known".
 * @param {Array} array - La lista de invitados.
 * @returns {Queue | boolean} - Cola de invitados válidos o false si no hay invitados válidos.
 */
function party(array) {
  // Tu código aquí

  const verifiedguests = new Queue()
  
  for (const guest of array) {
    if (guest.ticket === "VIP" && guest.status === "Known") {
      verifiedguests.enqueue(guest)
    }
  }

  if (verifiedguests.size()=== 0) {
    return false;
  }
  
  return verifiedguests
}

module.exports = {
  Queue,
  party
}