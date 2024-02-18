// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import TodoScreen from './src/screens/TodoScreen';

export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
}
