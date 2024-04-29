import { Pizza } from '../../Abstracts';

class CaliforniaPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Pepperoni Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'California Sauce';
    this.toppings.push('Grated California Cheese');
  }
}

export default CaliforniaPepperoniPizza;
