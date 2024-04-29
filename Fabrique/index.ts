import {
  NyPizzaStore,
  CaliforniaPizzaStore,
  ChicagoPizzaStore,
} from './Stores';

(() => {
  console.log('Fabrique');
  const nyPizzaStore = new NyPizzaStore();
  const nyPizza = nyPizzaStore.orderPizza('cheese');
  if(nyPizza){
    console.log(`Ethan ordered a ${nyPizza.getName()}`);
  }
})();
