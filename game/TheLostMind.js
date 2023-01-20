import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { DIALOGUE } from '../shared/DIALOGUE';

const TheLostMind = () => {
    const [currentRoom, setCurrentRoom] = useState ('start');

    function handleOptionClick(option) {
        setCurrentScene(option);
    }

    if (currentRoom === 'start'){
        return (
            <View>
                <Text>The Lost Mind</Text>
                <Text>{DIALOGUE[0].dialogue}</Text>
                <TextInput
                    placeholder='Type your option here'
                    placeholderTextColor='grey'
                    style={styles.input}
                />
            </View>
        )
    } 
}

export default TheLostMind;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      borderColor: '#fff',
      backgroundColor: '#000',
      color: '#fff',
      width: 250,
    },
  });