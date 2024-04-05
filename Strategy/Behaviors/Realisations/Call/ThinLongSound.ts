import { CallBehavior } from '../../Interfaces';

class ThinLongSound implements CallBehavior {
  call() {
    console.log('ThinLongCall');
  }
}
export default ThinLongSound;
