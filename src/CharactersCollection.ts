export class CharactersCollection {

    

    constructor(public data: string)
    {          }

    get length():number{ // Al poner el get, podemos llamarlo solo con collection.legth, dode collection es una instancia, no necesitamos agregar parentesis. Lo manejamos como una propiedad.
        return this.data.length;
    }

    compare (leftIndex:number, rightIndex:number):boolean
    {
        return this.data[leftIndex].toLowerCase() >this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex:number, rightIndex:number)
    { //En una cadena de caracteres en js no podemos cambiar los caracteres pero si los podemos pasar a un array con .spit(separador, limte) si el separador en un array vacio entonces separa la cadena en un array, sin separador devuelve un array con un solo elementos(laa cadena, el limite es opcional) y de ahí trabajarlo y regresarlo al string
        let stringData = this.data.split("");

        const leftHand=stringData[leftIndex];
        stringData[leftIndex]=stringData[rightIndex];
        stringData[rightIndex]=leftHand;

        this.data = stringData.join('');  //.join en un array los une en un string, sin parametro los separa con comas, con '' los une sin comas y con otro simbolo lo agrega entre letras
    }

}