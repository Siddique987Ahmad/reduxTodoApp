import { createReducer } from '@reduxjs/toolkit';
import { addTodo, toggleTodo, deleteTodo } from './actions';

const initialState = [];

const todoReducer = createReducer(initialState, {
  [addTodo]: (state, action) => [...state, action.payload],
  [toggleTodo]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
    ),
  [deleteTodo]: (state, action) => state.filter(todo => todo.id !== action.payload),
});

export default todoReducer;
