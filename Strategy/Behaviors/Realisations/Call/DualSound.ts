import { CallBehavior } from '../../Interfaces';

class DualSound implements CallBehavior {
  call() {
    console.log('DualSound');
  }
}

export default DualSound;
