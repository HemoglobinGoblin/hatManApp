import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/MainComonent';
import { NavigationContainer } from '@react-navigation/native';
import TheLostMind from './game/TheLostMind';

export default function App() {
  return (
    <NavigationContainer>
      {/* <TheLostMind /> */}
      <Main />
    </NavigationContainer>
  );
}

// Pull is good



// const styles = StyleSheet.create({
//   main: {
    
//   }
// })