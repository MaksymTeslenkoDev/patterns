import { QuackBehavior } from '../../Interfaces';

class Sqeak implements QuackBehavior {
  quack() {
    console.log('Sqeak');
  }
}

export default Sqeak;