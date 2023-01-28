import { Card } from "react-native-elements";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { DIALOGUE } from "../shared/DIALOGUE";

const DialogueView = ({ currentRoom }) => {
  return (
    <>
      <Text style={styles.title}>{DIALOGUE[currentRoom].choiceName}</Text>
      <Text style={styles.paragraph}>{DIALOGUE[currentRoom].dialogue}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    margin: 15,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#000",
    color: "#fff",
  },
  title: {
    color: "white",
    textAlign: "center",
    padding: 10,
    fontSize: 30,
  },
  paragraph: {
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: "center",
  },
});

export default DialogueView;
