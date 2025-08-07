import { Link } from 'expo-router';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useAuthStore } from '../utils/authStore';


export default function LoginScreen() {
  const { logIn } = useAuthStore();

  return (
    <View className="justify-center flex-1 p-4">
      <Text className='text-red-500 font-bold mb-4'>
        Bienvenido al Login
      </Text>
      <Pressable
        onPress={logIn}
        className="bg-blue-600 rounded-lg px-4 py-2 mb-4 items-center"
      >
        <Text className="text-white font-bold">Sign in</Text>
      </Pressable>
      <Link href="/register" asChild push >
        <Pressable
        className="bg-blue-600 rounded-lg px-4 py-2 mb-4 items-center"
      >
        <Text className="text-white font-bold">Registrarse</Text>
      </Pressable>
      </Link>
    </View>
  );
}

