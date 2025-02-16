import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function Orange() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1547514701-42782101795e' }}
        style={styles.image}
      />
      <Link href="/" style={styles.link}>Go back to list</Link>
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  link: {
    color: '#007AFF',
    fontSize: 16,
  },
});