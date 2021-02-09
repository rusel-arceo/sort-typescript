class Sorter
{
    //collection:number[]; definiendolo de esa manera en el constructor ya no tenemos que hacerlo aquí

    constructor(private collection:number[])
    {
        //this.collection=arreglo; Ya no es necesario por la forma en que se definio, automaticamente se vuelve una propiedad.
        
    }

    getArray():number[]
    {
        return this.collection;
    }

    makeSort():number[]
    {
        //let max=this.collection.length-1;
        let { length:max } = this.collection; //desestructuramos
        let aux=0;

        for(let i=0;i<max;i++)
        {
            for(let j=0;j<(max-1-i);j++)
            { 
                //if(i+1<=max)
                //{
                 if(this.collection[j]>this.collection[j+1])
                    {
                    aux=this.collection[j+1];
                    this.collection[j+1]=this.collection[j];
                    this.collection[j]=aux;
                    console.log(this.collection);
                    }

               // }
            }
        }    
        return this.collection;
    }
}

const sort = new Sorter([145,-10,0,50,10,2]);
console.log("Arreglo Ordenado:");
console.log(sort.makeSort());
