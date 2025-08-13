import { Link } from 'expo-router';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useAuthStore } from '../utils/authStore';
import { useState } from 'react';
import { registerUser, loginUser, RegisterData, LoginData } from "../services/api";



export default function LoginScreen() {
  const { logIn } = useAuthStore();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try {
      const user = await logIn(email, password);
    } catch (error) {
      console.error("Error al logear:", error);
    }
    console.log("handleLogin terminó")
  };
  return (
    <View className="justify-center flex-1 p-4">
      <Text className='text-red-500 font-bold mb-4'>
        Bienvenido al Login
      </Text>
      <TextInput
              placeholder="Correo electrónico"
              keyboardType="email-address"
              style={styles.input}
              onChangeText={setEmail}
            />
            <TextInput
              placeholder="Contraseña"
              secureTextEntry
              style={styles.input}
              onChangeText={setPassword}
            />
      <Pressable
        onPress={handleLogin}
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

const styles = {
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
}