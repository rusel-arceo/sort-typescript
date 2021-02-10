"use strict";
//import { NumbersCollection } from './numbersCollection'; no es necesario usamos la interface
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    //collection:number[]; definiendolo de esa manera en el constructor ya no tenemos que hacerlo aquí
    //constructor(private collection:number[] | string) haremos el cambio para no tener que poner los parametros de esta manera
    function Sorter(collection) {
        //this.collection=arreglo; Ya no es necesario por la forma en que se definio, automaticamente se vuelve una propiedad.
        this.collection = collection;
    }
    //Como collection puede ser un arreglo de numeros o un string, al union de sus metodos no coincide mas que en el acceso a sus indice pero sin pode modificar, para esto usaremos
    Sorter.prototype.makeSort = function () {
        //let max=this.collection.length-1;
        var length = this.collection.length; //desestructuramos
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < (length - 1 - i); j++) {
                //if collection es number aplica esto, this only gonna  work for number[]
                //con instaceof tsc comprende que collection es un array y funciona como tal
                // como que le decimos que se instancia de un array pero no funciona asi con strings
                //if(this.collection instanceof Array) aunque funciona no es optimo, por lo que lo eliminaremos
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                /*if(this.collection[j]>this.collection[j+1])
                {
                  aux=this.collection[j+1];
                  this.collection[j+1]=this.collection[j];
                  this.collection[j]=aux;
                }
                  */
                //Si collection cuando es un string, varia la forma de comprobar
                //if(typeof this.collection ==='string')
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
