import { Pizza } from '../../Abstracts';

class ChicagoPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Deep Dish Pepperoni Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings.push('Shredded Mozzarella Cheese');
  }
}

export default ChicagoPepperoniPizza;
