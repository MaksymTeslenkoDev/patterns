import { Pizza } from '../../Interfaces';

class PepperoniPizza implements Pizza {
  name: string;
  price: number;
  constructor() {
    this.name = 'Papperoni Pizza';
    this.price = 8;
  }
  prepare(): void {
    console.log(`Preparing ${this.name} Papperoni Pizza`);
  }
  bake(): void {
    console.log(`Baking ${this.name} Papperoni Pizza`);
  }
  cut(): void {
    console.log(`Cutting ${this.name} Papperoni Pizza`);
  }
  box(): void {
    console.log(`Boxing ${this.name} Papperoni Pizza`);
  }
}

export default PepperoniPizza;
