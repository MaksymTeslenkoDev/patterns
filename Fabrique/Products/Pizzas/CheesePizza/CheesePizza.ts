import { Pizza } from '../../Interfaces';

class CheesePizza implements Pizza {
  name: string;
  price: number;
  constructor() {
    this.name = 'Cheese Pizza';
    this.price = 8;
  }
  prepare(): void {
    console.log(`Preparing ${this.name} Cheese Pizza`);
  }
  bake(): void {
    console.log(`Baking ${this.name} Cheese Pizza`);
  }
  cut(): void {
    console.log(`Cutting ${this.name} Cheese Pizza`);
  }
  box(): void {
    console.log(`Boxing ${this.name} Cheese Pizza`);
  }
}

export default CheesePizza;
