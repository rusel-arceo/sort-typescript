//podrian ser doma clase peros se harra en una para ahorrar tiempo
class Nodo {
   next: Nodo | null=null;

    constructor(public data:number)
    {    }
   
}

export class LinkedList{
    private head: Nodo | null=null;

add(value:number):void
{
    const nodo= new Nodo(value);
    let tail:Nodo;

    //if(head ==='undefined') quivale al de abajo
    if(!this.head)
    {
        this.head = nodo; //Recuerda que se pasan por referencia, no por valor
        return; //como es void puedo usar el return pero sin valor alguno
    }

    tail = this.head;

    while(tail.next) //Mientras sea != de null
    {
        tail=tail.next; //buscamos el ultumo nodo
    }

    tail.next= new Nodo(value);
       
}

get length():number
{
    let tail = this.head;
    let length = 0;

    while(tail)
    {
        length++;
        tail=tail.next;
    }
    return length;
}

at(index:number):Nodo //BUsca el nodo en el elemento n 
{
    //if(this.head===null)
    if(!this.head)
        { throw new Error("index out of bounds");}
    
        let node:Nodo | null = this.head;
        let counter=0;

    while(node)
    {

        if(counter===index)
        { 
            return node;
        }        
        counter++;
        node=node.next;
    }
    throw new Error("index out of bounds");
}

compare (leftIndex:number, rightIndex:number):boolean
{
    if(!this.head)
    {
        throw new Error("Lsit is empty"); //No tiene caso
    }
    
    return this.at(leftIndex).data>this.at(rightIndex).data;
}

swap(leftIndex:number, rightIndex:number):void
{
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
}

print():void{
    if(!this.head)
    { return; }

    let node: Nodo | null = this.head;
    while(node)
    {
        console.log(node.data);
        node= node.next;
    }
    
}

}