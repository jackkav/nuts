import { addTodo, types } from '../src/ducks'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    }
    expect(addTodo(text)).toEqual(expectedAction)
  })
})
