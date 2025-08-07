import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      
      <Text>
      Modal Screen
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});