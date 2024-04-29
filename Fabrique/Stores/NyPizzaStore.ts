import { PizzaStore } from './PizzaStore';
import { Pizza } from '../Products/Abstracts';
import { NyCheesePizza, NyPepperoniPizza } from '../Products/Pizzas';

class NyPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === 'cheese') {
      return new NyCheesePizza();
    } else if (type === 'pepperoni') {
      return new NyPepperoniPizza();
    } else {
      return null;
    }
  }
}
export default NyPizzaStore;
