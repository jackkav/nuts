import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'
import { actions, types } from '../src/ducks'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_SHOWS_SUCCESS when fetching shows has been done', () => {
    nock('http://example.com/')
      .get('/shows')
      .reply(200, { body: { shows: ['do something'] } })

    const expectedActions = [
      { type: types.FETCH_SHOWS_REQUEST },
      { type: types.FETCH_SHOWS_SUCCESS, body: { shows: ['do something'] } },
    ]
    const store = mockStore({ shows: [] })

    return store.dispatch(actions.fetchShows())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
