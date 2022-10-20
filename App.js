import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
        style={styles.dummyText}
        >
          Another Piece Of Text!</Text>
      </View>
      <Text style={{margin: 16, borderWidth: 2, borderColor:'red', padding: 16}}>Hello World!!!</Text>
      <Button title='Tap me!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:{
    margin: 16, 
    borderWidth: 2, 
    borderColor:'red', 
    padding: 16
  }
});
