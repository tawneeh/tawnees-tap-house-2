import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {

  const currentState = {
    1: {name: '10 Below',
    brand: 'Scuttlebutt Brewing',
    price: '5',
    alcoholContent: '7',
    pintsLeft: '124',
    id: 1},
    2: {name: 'Peaches For Me IPA',
    brand: 'Redhook',
    price: '7',
    alcoholContent: '6',
    pintsLeft: '50',
    id: 2}
  }

  let action;
  const kegData = {
    name: '10 Below',
    brand: 'Scuttlebutt Brewing',
    price: '5',
    alcoholContent: '7',
    pintsLeft: '124',
    id: 1
  };

  test('Should return default state if there is no action type passed in', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new keg data to the masterKegList', () => {
    const { name, brand, price, alcoholContent, pintsLeft, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name,
      brand,
      price,
      alcoholContent,
      pintsLeft,
      id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Peaches For Me IPA',
      brand: 'Redhook',
      price: '7',
      alcoholContent: '6',
      pintsLeft: '50',
      id: 2}
    });
  });

});