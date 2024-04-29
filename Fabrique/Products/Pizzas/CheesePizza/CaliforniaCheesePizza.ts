import { Pizza } from '../../Abstracts';

class CaliforniaCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'California Style Cheese Pizza';
    this.dough = 'Thin Crust Dough';
    this.sauce = 'California Sauce';
    this.toppings.push('Grated California Cheese');
  }
}

export default CaliforniaCheesePizza;
