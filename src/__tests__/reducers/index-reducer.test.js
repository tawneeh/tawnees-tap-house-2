import rootReducer from '../../reducers/index';

describe("rootReducer", () => {

  test('Should return default state if there is no action type passed in', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisibleOnPage: false
    });
  });

});