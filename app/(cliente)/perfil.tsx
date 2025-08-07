import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuthStore } from '../../utils/authStore';

export default function PerfilCliente() {
  const {logOut } = useAuthStore();
  return (
    <View className='flex-1 justify-center p-4'>
      <Text className='font-bold mb-4'>Bienvenido al modo Perfil Cliente</Text>
      <Button title='Sign Out' onPress={logOut}/>
    </View>
  );
}
