const { Queue, party } = require("../exam/01");

describe("Ejercicio 01 - party", () => {
  const guests = [
    {
      name:"Carol",
      ticket:"FALSE",
      status: "Unknown"
    },
    {
      name:"Gonzalo",
      ticket:"VIP",
      status: "Known"
    },
    {
      Name: "Micaias",
      ticket:"VIP",
      status: "Known"
    },
    {
      Name: "Coraline",
      ticket:"FALSE",
      status: "Unknown"
    },
    {
      Name: "Micaias",
      ticket:"VIP",
      status: "Unknown"
    },
    {
      name:"Mati",
      ticket:"VIP",
      status: "Known"
    }
  ]

  test("La función debe retornar la QUEUE resultante de procesar los movimientos", () => {
    expect(party([guests[0], guests[1], guests[2], guests[3], guests[4]])).toEqual({ array: [{
      name:"Gonzalo",
      ticket:"VIP",
      status: "Known"
    },{
      Name: "Micaias",
      ticket:"VIP",
      status: "Known"
    }]});
    expect(party([guests[1], guests[2], guests[3], guests[4],guests[5]])).toEqual({ array: [{
      name:"Gonzalo",
      ticket:"VIP",
      status: "Known"
    },{
      Name: "Micaias",
      ticket:"VIP",
      status: "Known"
    },{
      name:"Mati",
      ticket:"VIP",
      status: "Known"
    }]});
  });
  test("Si la función intenta retirar a una persona cuando la Queue se encuentra vacía, debe retornar false", () => {
    expect(party([])).toEqual(false);
    expect(party([{name: "Macarena"}])).toEqual(false);
    expect(party(["Franco", 43, [], {name: "John", ticket: "VIP", status: "Unknown"}])).toEqual(false);
    expect(party([{name: "John"}, {name: "Lei"}])).toEqual(
      false
    );
  });
  test("La Queue retornada debe ser instancia de la clase Queue", () => {
    expect(party([guests[0], guests[1], guests[2], guests[3], guests[4]]) instanceof Queue).toEqual(true);
    expect(party([guests[5], guests[1], guests[2], guests[3], guests[4]]) instanceof Queue).toEqual(true);
  });
});