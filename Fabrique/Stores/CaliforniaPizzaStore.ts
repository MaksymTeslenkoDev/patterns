import { PizzaStore } from './PizzaStore';
import { Pizza } from '../Products/Interfaces';
import {
  CaliforniaCheesePizza,
  CaliforniaPepperoniPizza,
} from '../Products/Pizzas';

class CaliforniaPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza | null {
    if (type === 'cheese') {
      return new CaliforniaCheesePizza();
    } else if (type === 'pepperoni') {
      return new CaliforniaPepperoniPizza();
    } else {
      return null;
    }
  }
}

export default CaliforniaPizzaStore;
