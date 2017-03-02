// action types
export const types = {
  ADD_TODO: 'ADD_TODO',
}
// actions
export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  }
}

