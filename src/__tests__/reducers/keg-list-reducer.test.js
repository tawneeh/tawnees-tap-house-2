import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed in', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });
});