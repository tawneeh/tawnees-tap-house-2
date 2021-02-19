import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('tap house actions', () => {

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: '10 Below', brand: 'Scuttlebutt Brewing', price: '5', alcoholContent: '7', pintsLeft: '124', id: 1})).toEqual({
    type: c.ADD_KEG,
    name: '10 Below',
    brand: 'Scuttlebutt Brewing',
    price: '5',
    alcoholContent: '7',
    pintsLeft: '124',
    id: 1
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

});