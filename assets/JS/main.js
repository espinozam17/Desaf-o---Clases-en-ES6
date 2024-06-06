import { Cliente } from "./client.js";
import { Impuesto } from "./taxes.js";

let taxes1 = new Impuesto(125, 94);
let cliente1 = new Cliente("Lucas", taxes1);
console.log(cliente1.calcularImpuesto());