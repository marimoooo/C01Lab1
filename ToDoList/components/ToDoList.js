import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
    const [toDoLists, settoDoLists] = useState(
        initialValues.map((value) => ({ id: uuidv4(), title: value }))
    );
    
    const addToDo = (newTitle) => {
        const newTodo = { id: uuidv4(), title: newTitle };
        settoDoLists((prevCounters) => [...prevCounters, newTodo]);
    };

    const removeToDo = (id) => {
        settoDoLists((prevToDoLists) =>
            prevToDoLists.filter((toDo) => toDo.id !== id)
        );
    };

    return (
        <View style={styles.todoListContainer}>
            {toDoLists.map((toDo) => (
                <View style={styles.todoItem} key={toDo.id}>
                    <Text>{toDo.title}</Text>
                    <Button title="Remove" onPress={() => removeToDo(toDo.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo} />
        </View>
    );
};

ToDoList.defaultProps = {
    initialValues: [],
};

const styles = StyleSheet.create({
    todoListContainer: {
        margin: 10,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export default ToDoList;