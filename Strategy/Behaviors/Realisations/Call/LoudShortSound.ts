import { CallBehavior } from "../../Interfaces";

class LoudShortSound implements CallBehavior {
    call() {
        console.log('LoudShortCall');
    }
}

export default LoudShortSound;