"use strict";

var _client = require("./client.js");
var _taxes = require("./taxes.js");
var taxes1 = new _taxes.Impuesto(125, 94);
var cliente1 = new _client.Cliente("Lucas", taxes1);
console.log(cliente1.calcularImpuesto());