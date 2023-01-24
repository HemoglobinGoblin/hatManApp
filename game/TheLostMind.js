import React, {useState} from 'react';
import { Card } from 'react-native-elements';
import { Text, TextInput, View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { DIALOGUE } from '../shared/DIALOGUE';

const TheLostMind = () => {
    const [currentRoom, setCurrentRoom] = useState ('start');

    function handleOptionClick(option) {
        setCurrentScene(option);
    }

    if (currentRoom === 'start'){
        return (
           <ScrollView style={{ backgroundColor: 'black'}}>
                <Card containerStyle={{ padding: 0, backgroundColor: 'black' }}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text style={styles.title}>{DIALOGUE[0].choiceName}</Text>
                        <Text style={styles.paragraph}>{DIALOGUE[0].dialogue}</Text>
                        <TextInput
                            placeholder='Type your option here'
                            placeholderTextColor='grey'
                            style={styles.input}
                            textAlign={'center'}
                        />
                    </View>
                </Card>
            </ScrollView>
        )
    } 
}

export default TheLostMind;

const styles = StyleSheet.create({
    input: {
      height: 35,
      margin: 15,
      borderWidth: 2,
      borderColor: '#fff',
      backgroundColor: '#000',
      color: '#fff',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        fontSize: 30
    },
    paragraph: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
       
    }
  });