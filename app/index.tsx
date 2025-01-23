import { View, Text, StyleSheet, Pressable } from 'react-native';
import FruitList from '../components/FruitList';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Fruit App!</Text>
      <Pressable 
        style={styles.button}
        onPress={() => alert('Button pressed!')}
      >
        <Text style={styles.buttonText}>Click Me!</Text>
      </Pressable>
      <FruitList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});