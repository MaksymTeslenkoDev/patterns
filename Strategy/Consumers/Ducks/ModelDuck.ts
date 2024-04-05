import { Duck } from './Duck';
import { FlyNoWay } from '../../Behaviors/Realisations/Fly';
import { Quack } from '../../Behaviors/Realisations/Quack';

class ModelDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Quack());
  }

  display() {
    console.log("I'm a model duck");
  }
}

export default ModelDuck;
