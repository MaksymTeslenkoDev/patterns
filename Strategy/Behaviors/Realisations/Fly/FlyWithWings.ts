import { FlyBehavior } from '../../Interfaces';

class FlyWithWings implements FlyBehavior {
    fly() {
        console.log('I am flying with wings');
    }
}

export default FlyWithWings;