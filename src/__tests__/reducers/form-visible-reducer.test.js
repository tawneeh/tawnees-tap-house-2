import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {

  test('Should return default state if there is no action type passed in', () => {
    expect(formVisibleOnPage(false, { type: null })).toEqual(false);
  });
});