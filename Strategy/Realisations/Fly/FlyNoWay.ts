import { FlyBehavior } from "../../Interfaces";

class FlyNoWay implements FlyBehavior {
    fly(): void {
        console.log("I can't fly");
    }
}
export default FlyNoWay;