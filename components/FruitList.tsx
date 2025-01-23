import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function FruitList() {
  const router = useRouter();
  const fruits = ['apple', 'orange', 'mango'];

  return (
    <View style={styles.container}>
      {fruits.map((fruit) => (
        <Pressable
          key={fruit}
          style={({ pressed }) => [
            styles.item,
            pressed && styles.pressed
          ]}
          onPress={() => router.push(`/${fruit}`)}
        >
          <Text style={styles.text}>{fruit}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  item: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#e0e0e0',
    transform: [{ scale: 0.98 }],
  },
  text: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});