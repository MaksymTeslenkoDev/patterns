import {
  NyPizzaStore,
  CaliforniaPizzaStore,
  ChicagoPizzaStore,
} from './Stores';

(() => {
  console.log('Fabrique');
  const nyPizzaStore = new NyPizzaStore();
  nyPizzaStore.orderPizza('cheese');

  const californiaPizzaStore = new CaliforniaPizzaStore();
  californiaPizzaStore.orderPizza('pepperoni');

  const chicagoPizzaStore = new ChicagoPizzaStore();
  chicagoPizzaStore.orderPizza('cheese');
})();
