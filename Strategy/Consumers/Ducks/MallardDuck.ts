import { Duck } from './Duck';
import { FlyWithWings } from '../../Behaviors/Realisations/Fly';
import { Quack } from '../../Behaviors/Realisations/Quack';

class MallardDuck extends Duck {
  constructor() {
    // Quack is a class that implements QuackBehavior, so performQuack() -> 'Quack'
    // FlyWithWings is a class that implements FlyBehavior, so performFly() -> 'I'm flying with wings'
    super(new FlyWithWings(), new Quack());
  }

  override display(): void {
    console.log("I'm a real Mallard duck");
  }
}

export default MallardDuck;
