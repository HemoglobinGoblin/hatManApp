import { StyleSheet, Text, View } from 'react-native';
import TheLostMind from './game/TheLostMind';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <TheLostMind />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
})