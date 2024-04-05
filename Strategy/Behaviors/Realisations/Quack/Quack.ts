import { QuackBehavior } from '../../Interfaces';

class Quack implements QuackBehavior {
    quack() {
        console.log('Quack');
    }
}

export default Quack;