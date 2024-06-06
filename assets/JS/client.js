export class Cliente {
  #nombre;
  #impuesto;

  constructor(nombre, impuesto) {
    this.#nombre = nombre;
    this.#impuesto = impuesto;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(newValue) {
    this.#nombre = newValue;
  }

  get impuesto() {
    return this.#impuesto;
  }

  set impuesto(newValue) {
    this.#impuesto = newValue;
  }

  calcularImpuesto() {
    return this.nombre + " debes pagar " + ( this.#impuesto.montoBrutoAnual - this.#impuesto.deducciones) * 0.21;
  }
}
