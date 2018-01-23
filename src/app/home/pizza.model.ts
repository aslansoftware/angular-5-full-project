export class PizzaModel {
  constructor(public name: string, public size: number, public description: string, public type: string, public price:number ) {
    console.log('Pizza Model - constructor');
  }
}

