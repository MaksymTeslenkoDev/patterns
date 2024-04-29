import { PizzaStore } from './PizzaStore';
import { Pizza } from '../Products/Abstracts';
import { ChicagoPepperoniPizza, ChicagoCheesePizza } from '../Products/Pizzas';

class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === 'cheese') {
      return new ChicagoCheesePizza();
    } else if (type === 'pepperoni') {
      return new ChicagoPepperoniPizza();
    } else {
      return null;
    }
  }
}
export default ChicagoPizzaStore;
