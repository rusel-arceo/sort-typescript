"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var LinkedList_1 = require("./LinkedList");
var listCollection = new LinkedList_1.LinkedList();
listCollection.add(500);
listCollection.add(10);
listCollection.add(-3);
listCollection.add(4);
listCollection.add(0);
//listCollection.print(); //imprime la lista
// const stringToSort = new CharactersCollection("xacrt");
// const numberCollection = new NumbersCollection([90,4,67,-2,67,5,34]);
// const sort = new Sorter(numberCollection);
// const sort2 = new Sorter(stringToSort);
var sort3 = new Sorter_1.Sorter(listCollection);
// console.log("Arreglo de numeros Ordenado:");
// sort.makeSort();
// console.log(numberCollection.data);
// console.log("Arreglo de carateres Ordenado");
// sort2.makeSort();
// console.log(stringToSort.data);
sort3.makeSort();
console.log("imprimiendo lista: ");
listCollection.print(); //imprime la lista
