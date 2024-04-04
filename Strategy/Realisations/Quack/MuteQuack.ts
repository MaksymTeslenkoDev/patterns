import { QuackBehavior } from '../../Interfaces';

class MuteQuack implements QuackBehavior {
  quack() {
    console.log('<< Silence >>');
  }
}

export default MuteQuack;
