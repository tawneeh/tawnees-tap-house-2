import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, pintsLeft, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pintsLeft: pintsLeft,
    id: id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});