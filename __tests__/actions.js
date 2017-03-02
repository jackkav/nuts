import { actions, types, addFavorite } from '../src/ducks'

describe('actions', () => {
  it('should create an action to add a favourite', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_FAVORITE,
      text,
    }
    expect(actions.addFavorite(text)).toEqual(expectedAction)
  })
  it('should create an action to request a list of shows', () => {
    const expectedAction = {
      type: types.FETCH_SHOWS_REQUEST,
    }
    expect(actions.fetchShowsRequest()).toEqual(expectedAction)
  })
})

describe('favorites reducer', () => {
  it('should return the initial state', () => {
    expect(addFavorite(undefined, {})).toEqual([{ text: 'Use Redux', completed: false, id: 0 }])
  })

  it('should handle ADD_FAVORITE', () => {
    expect(
      addFavorite([], { type: types.ADD_FAVORITE, text: 'Run the tests' }),
    ).toEqual([{ text: 'Run the tests', completed: false, id: 0 }])

    expect(
      addFavorite([{ text: 'Use Redux', completed: false, id: 0 }], { type: types.ADD_FAVORITE, text: 'Run the tests' }),
    ).toEqual([{ text: 'Run the tests', completed: false, id: 1 }, { text: 'Use Redux', completed: false, id: 0 }])
  })
})
