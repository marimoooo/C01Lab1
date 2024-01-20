
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
    const [todoText, setTodoText] = useState('');

    const handleAddTask = () => {
        if (todoText.trim() !== '') {
            onAddTask(todoText);
            setTodoText('');
        }
      };

      
    return (
        <View style={styles.addTodoForm}>
            <TextInput
                style={styles.input}
                placeholder="Enter your new todo"
                value={todoText}
                onChangeText={(text) => setTodoText(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Todo" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    }
});

export default AddTask;