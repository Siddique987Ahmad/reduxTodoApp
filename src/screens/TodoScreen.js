// TodoScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';

const TodoScreen = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Enter your task"
        onChangeText={(inputText) => setText(inputText)}
        value={text}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <TodoList />
    </View>
  );
};

export default TodoScreen;
