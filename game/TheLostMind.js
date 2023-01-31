import React, { useState } from "react";
import { Card } from "react-native-elements";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import DialogueView from "./gameHandler";
import { DIALOGUE } from "../shared/DIALOGUE";

let i = 0;

const TheLostMind = () => {
  const [currentRoom, setCurrentRoom] = useState(0);

  if (currentRoom <= 15) {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <Card containerStyle={{ padding: 0, backgroundColor: "black" }}>
          <View style={{ justifyContent: "center", flex: 1 }}>
            <DialogueView currentRoom={currentRoom} />
            {DIALOGUE[currentRoom].options.map((option) => {
              return (
                <Button
                  key={option}
                  title={option}
                  onPress={() => {
                    console.log("works", option);
                    setCurrentRoom(
                      DIALOGUE.filter((obj) => obj.choiceName === option)[0].id
                    );
                  }}
                ></Button>
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

export default TheLostMind;
