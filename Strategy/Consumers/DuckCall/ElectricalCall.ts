import { DualSound } from '../../Behaviors/Realisations/Call';
import DuckCall from './DuckCall';

class ElectricalCall extends DuckCall {
  constructor() {
    super(new DualSound());
  }

  display() {
    console.log("I'm an electrical duck call");
  }
}

export default ElectricalCall;
