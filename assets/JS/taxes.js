export class Impuesto {

    #montoBrutoAnual;
    #deducciones;
  
    constructor(montoBrutoAnual, deducciones) {
      this.montoBrutoAnual = montoBrutoAnual;
      this.deducciones = deducciones;
    }
  
   
    get montoBrutoAnual() {
     
      return this.#montoBrutoAnual;
    }
 
    set montoBrutoAnual(newValue) {
      this.#montoBrutoAnual = newValue;
    }

    get deducciones() {
     
      return this.#deducciones;
    }
  
    set deducciones(newValue) {
      this.#deducciones = newValue;
    }
   

};