import PapperoniPizza from './PapperoniPizza';

class ClassicPapperoniPizza extends PapperoniPizza {
  constructor() {
    super();
    this.name = 'Classic';
    this.price = 10;
  }
}

export default ClassicPapperoniPizza;
