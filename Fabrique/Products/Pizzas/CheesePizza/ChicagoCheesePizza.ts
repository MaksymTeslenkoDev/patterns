import { Pizza } from '../../Abstracts';
class ChicagoCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago Style Deep Dish Cheese Pizza';
    this.dough = 'Extra Thick Crust Dough';
    this.sauce = 'Plum Tomato Sauce';
    this.toppings.push('Shredded Mozzarella Cheese');
  }
}

export default ChicagoCheesePizza;
