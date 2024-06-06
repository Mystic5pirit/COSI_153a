import React,{useState} from 'react';
import { SafeAreaView,StyleSheet, Text, View, Button } from 'react-native';
const Counter = ({children}) => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>This is Tim Hickey's Newest App</Text>
      <Text>Count: {count}</Text>
      <Button title="add 1" onPress={() => setCount(count + 1) }>Increment</Button>
      <Button title="sub 1" onPress={() => setCount(count - 1)}>Decrement</Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Counter;