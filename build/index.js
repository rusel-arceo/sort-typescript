"use strict";
var Sorter = /** @class */ (function () {
    //collection:number[]; definiendolo de esa manera en el constructor ya no tenemos que hacerlo aquí
    function Sorter(collection) {
        //this.collection=arreglo; Ya no es necesario por la forma en que se definio, automaticamente se vuelve una propiedad.
        this.collection = collection;
    }
    Sorter.prototype.getArray = function () {
        return this.collection;
    };
    Sorter.prototype.makeSort = function () {
        //let max=this.collection.length-1;
        var max = this.collection.length; //desestructuramos
        var aux = 0;
        for (var i = 0; i < max; i++) {
            for (var j = 0; j < (max - 1 - i); j++) {
                //if(i+1<=max)
                //{
                if (this.collection[j] > this.collection[j + 1]) {
                    aux = this.collection[j + 1];
                    this.collection[j + 1] = this.collection[j];
                    this.collection[j] = aux;
                    console.log(this.collection);
                }
                // }
            }
        }
        return this.collection;
    };
    return Sorter;
}());
var sort = new Sorter([145, -10, 0, 50, 10, 2]);
console.log("Arreglo Ordenado:");
console.log(sort.makeSort());
