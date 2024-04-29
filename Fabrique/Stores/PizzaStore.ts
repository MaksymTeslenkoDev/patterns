import { Pizza } from '../Products/Abstracts';

export abstract class PizzaStore {
  public orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null = this.createPizza(type);
    if (pizza === null) {
      console.log('Sorry, we do not have this pizza');
      return null;
    }
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  abstract createPizza(type: string): Pizza | null;
}
