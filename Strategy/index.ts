import { MallardDuck, ModelDuck } from "./Consumers/Ducks";
import { FlyRocketPowered } from "./Behaviors/Realisations/Fly";
import { ElectricalCall } from "./Consumers/DuckCall";
import { ThinLongSound } from "./Behaviors/Realisations/Call";

(() => {
  const mallardDuck = new MallardDuck();
  mallardDuck.performQuack();
  mallardDuck.performFly();

  const modelDuck = new ModelDuck();
  modelDuck.performFly();
  modelDuck.setFlyBehavior(new FlyRocketPowered());
  modelDuck.performFly();

  const duckCall = new ElectricalCall();
  duckCall.performCall();
  duckCall.setCallBehavior(new ThinLongSound());
  duckCall.performCall();
})();
 