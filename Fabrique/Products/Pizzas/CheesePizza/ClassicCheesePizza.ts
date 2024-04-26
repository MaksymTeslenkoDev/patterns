import CheesePizza from './CheesePizza';

class ClassicCheesePizza extends CheesePizza {
  constructor() {
    super();
    this.name = 'Classic';
    this.price = 12;
  }
}

export default ClassicCheesePizza;
