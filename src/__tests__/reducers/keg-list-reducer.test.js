import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {

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

});