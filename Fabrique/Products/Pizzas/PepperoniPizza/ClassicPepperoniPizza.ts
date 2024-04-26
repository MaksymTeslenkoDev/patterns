import PepperoniPizza from './PepperoniPizza';

class ClassicPepperoniPizza extends PepperoniPizza {
  constructor() {
    super();
    this.name = 'Classic';
    this.price = 10;
  }
}

export default ClassicPepperoniPizza;
