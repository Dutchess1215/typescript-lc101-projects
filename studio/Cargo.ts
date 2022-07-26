import {Payload} from './Payload';
export class Cargo implements Payload {
     // properties and methods
     massKg: number;
     material: string;
     constructor(material: string, massKg: number,){
         this.material = material;
         this.massKg = massKg;
     }
 }