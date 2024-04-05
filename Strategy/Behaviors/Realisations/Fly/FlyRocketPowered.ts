import { FlyBehavior } from "../../Interfaces";

class FlyRocketPowered implements FlyBehavior {
  fly() {
    console.log('I\'m flying with a rocket!');
  }
}

export default FlyRocketPowered;