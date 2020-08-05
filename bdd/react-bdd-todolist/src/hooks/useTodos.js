import { useReducer } from "react";

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_STRIKE_TODO = "TOGGLE_STRIKE_TODO";
let ID = 0;
const initialState = {
  [`todo-999`]: {
    id: "todo-999",
    text: "asdf",
    strike: false,
  },
};

const reducer = (state, { type, payload }) => {
  if (type === ADD_TODO) {
    return {
      ...state,
      ...payload,
    };
  }

  if (type === REMOVE_TODO) {
    const newState = { ...state };
    delete newState[payload];

    return newState;
  }

  if (type === TOGGLE_STRIKE_TODO) {
    return {
      ...state,
      [`${payload.idTodo}`]: {
        ...state[payload.idTodo],
        strike: payload.checked,
      },
    };
  }
  return state;
};

const useTodos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);

  const addTodo = (value) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        [`todo-${ID++}`]: {
          id: `todo-${ID++}`,
          text: value,
          strike: false,
        },
      },
    });
  };

  const removeTodo = (idTodo) => {
    dispatch({
      type: REMOVE_TODO,
      payload: idTodo,
    });
  };

  const toggleStrikeTodo = (checked, idTodo) => {
    dispatch({
      type: TOGGLE_STRIKE_TODO,
      payload: {
        checked,
        idTodo,
      },
    });
  };

  return { todos, addTodo, removeTodo, toggleStrikeTodo };
};

export { useTodos };
