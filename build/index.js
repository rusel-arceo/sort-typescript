"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var numbersCollection_1 = require("./numbersCollection");
var numberCollection = new numbersCollection_1.NumbersCollection([90, 4, 67, -2, 67, 5, 34]);
var sort = new Sorter_1.Sorter(numberCollection);
console.log("Arreglo Ordenado:");
console.log(sort.makeSort());
