import { LoudShortSound } from '../../Behaviors/Realisations/Call';
import DuckCall from './DuckCall';

class BrassCall extends DuckCall {
  constructor() {
    super(new LoudShortSound());
  }

  display() {
    console.log("I'm a brass duck call");
  }
}

export default BrassCall;
