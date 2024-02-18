// TodoList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={{ fontSize: 18, margin: 10, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
          <Text style={{ color: 'green', fontSize: 18, margin: 10 }}>Toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(deleteTodo(item.id))}>
          <Text style={{ color: 'red', fontSize: 18, margin: 10 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TodoList;
