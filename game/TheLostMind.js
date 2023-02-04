import { Text, TextInput, View, StyleSheet, Platform, ScrollView } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { Card } from "react-native-elements";
import DialogueView from "./gameHandler";
import { DIALOGUE } from "../shared/DIALOGUE";
import { Button } from "react-native-elements";

let i = 0;

const TheLostMind = () => {
  const [currentRoom, setCurrentRoom] = useState(0);

  if (currentRoom <= 15) {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <Image 
          source={require('../assets/hatMan.png')} 
          style={styles.image}
        />
        <Card containerStyle={{ padding: 0, backgroundColor: "black" }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <DialogueView currentRoom={currentRoom} />
            {DIALOGUE[currentRoom].options.map((option) => {
              return (
                <Button
                  buttonStyle={styles.button}
                  key={option}
                  title={option}
                  onPress={() => {
                    console.log("works", option);
                    setCurrentRoom(
                      DIALOGUE.filter((obj) => obj.choiceName === option)[0].id
                    );
                  }}
                />
              );
            })}
          </View>
        </Card>
      </ScrollView>
    );
  } else {
  return (
    <ScrollView style={{ backgroundColor: "black" }}>
        <Card containerStyle={{ padding: 0, backgroundColor: "black" }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <Text style={{color:'white'}}>At the end now</Text>
          </View>
        </Card>
      </ScrollView>
  )}
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 400,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20
  },
  button: {
    backgroundColor: '#000',
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 50,
    width: 250
  }
})

export default TheLostMind;
