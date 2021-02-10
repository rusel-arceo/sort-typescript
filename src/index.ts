import {Sorter} from './Sorter';
import { NumbersCollection } from './numbersCollection';


const numberCollection = new NumbersCollection([90,4,67,-2,67,5,34]);
const sort = new Sorter(numberCollection);
console.log("Arreglo Ordenado:");
console.log(sort.makeSort());