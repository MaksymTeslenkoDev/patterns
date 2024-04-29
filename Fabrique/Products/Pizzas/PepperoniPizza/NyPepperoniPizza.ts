import { Pizza } from '../../Abstracts';

class NyPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Style Pepperoni Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Grated Reggiano Cheese');
  }
}

export default NyPepperoniPizza;
