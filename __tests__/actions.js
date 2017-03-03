import { actions, types, favoriteReducer } from '../src/ducks'

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
    expect(favoriteReducer(undefined, {})).toEqual([{ text: 'The Walking Dead', completed: false, id: 0 }])
  })

  it('should handle ADD_FAVORITE', () => {
    expect(
      favoriteReducer([], { type: types.ADD_FAVORITE, text: 'The Expanse' }),
    ).toEqual([{ text: 'The Expanse', completed: false, id: 0 }])

    expect(
      favoriteReducer([{ text: 'The Walking Dead', completed: false, id: 0 }], { type: types.ADD_FAVORITE, text: 'The Expanse' }),
    ).toEqual([{ text: 'The Expanse', completed: false, id: 1 }, { text: 'The Walking Dead', completed: false, id: 0 }])
  })

  it('should handle REMOVE_FAVORITE', () => {
    expect(
      favoriteReducer([], { type: types.REMOVE_FAVORITE, text: 'The Walking Dead' }),
    ).toEqual([])
  })
})

const countReducer = function (state, action) {
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  }
  return state

}
describe('count reducer', () => {
  it('should handle INCREMENT', () => {
    expect(
      countReducer(1, { type: 'INCREMENT' }),
    ).toEqual(2)
  })
  it('should handle INCREMENT', () => {
    expect(
      countReducer(10, { type: 'DECREMENT' }),
    ).toEqual(9)
  })
})
