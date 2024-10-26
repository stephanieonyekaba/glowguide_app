import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View } from 'react-native';

export default function App() {

  return (
      <View style= {styles.container}>
        <Text> Glow Guide </Text>
        <StatusBar style="auto" />
      </View>

  );
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#a9a1ff',
    alignItems: 'center',
    justifyContent: 'center'
  }

})