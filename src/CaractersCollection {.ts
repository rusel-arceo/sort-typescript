export class NumbersCollection {

    constructor(public data: number[])
    {    }

    get length():number{ // Al poner el get, podemos llamarlo solo con collection.legth, dode collection es una instancia, no necesitamos agregar parentesis. Lo manejamos como una propiedad.
        return this.data.length;
    }

    compare (leftIndex:number, rightIndex:number):boolean
    {
        return this.data[leftIndex]>this.data[rightIndex];
    }

    swap(leftIndex:number, rightIndex:number)
    {
        const leftHand=this.data[leftIndex];
        this.data[leftIndex]=this.data[rightIndex];
        this.data[rightIndex]=leftHand;
    }

}