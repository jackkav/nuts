import fetch from 'isomorphic-fetch'
// action types
export const types = {
  ADD_FAVORITE: 'ADD_FAVORITE',
  ADD_TODO: 'ADD_TODO',
  FETCH_SHOWS_REQUEST: 'FETCH_SHOWS_REQUEST',
  FETCH_SHOWS_SUCCESS: 'FETCH_SHOWS_SUCCESS',
  FETCH_SHOWS_FAILURE: 'FETCH_SHOWS_FAILURE',
}
// actions
export class actions {
  static addFavorite(text) {
    return {
      type: types.ADD_FAVORITE,
      text,
    }
  }
  static fetchShowsRequest() {
    return {
      type: types.FETCH_SHOWS_REQUEST,
    }
  }

  static fetchShowsSuccess(body) {
    return {
      type: types.FETCH_SHOWS_SUCCESS,
      body,
    }
  }

  static fetchShowsFailure(ex) {
    return {
      type: types.FETCH_SHOWS_FAILURE,
      ex,
    }
  }
  static fetchShows() {
    return dispatch => {
      dispatch(this.fetchShowsRequest())
      return fetch('http://example.com/shows')
      .then(res => res.json())
      .then(json => dispatch(this.fetchShowsSuccess(json.body)))
      .catch(ex => dispatch(this.fetchShowsFailure(ex)))
    }
  }
}
// reducers
const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0,
  },
]

export class reducers {
  static shows(state = initialState, action) {
    switch (action.type) {
      case types.ADD_FAVORITE:
        return [
          {
            id: state.reduce((maxId, show) => Math.max(show.id, maxId), -1) + 1,
            completed: false,
            text: action.text,
          },
          ...state,
        ]

      default:
        return state
    }
  }
}
export function addFavorite(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
        },
        ...state,
      ]

    default:
      return state
  }
}
