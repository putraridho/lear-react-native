export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
};

export const actionCreators = {
  add: (item) => ({ type: types.ADD, payload: item }),
  remove: (index) => ({ type: types.REMOVE, payload: index }),
};

const initialState = {
  todos: ['Click to remove', 'Learn React Native', 'Write Code', 'Ship App'],
};

export const reducer = (state = initialState, { type, payload }) => {
  const { todos } = state;
  switch (type) {
    case types.ADD:
      return {
        ...state,
        todos: [payload, ...todos],
      };
    case types.REMOVE:
      return {
        ...state,
        todos: todos.filter((_, i) => i !== payload),
      };
    default:
      return state;
  }
};
