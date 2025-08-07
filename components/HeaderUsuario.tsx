// components/HeaderUsuario.tsx
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  nombre: string;
  direccion: string;
  mostrarCarrito?: boolean; // 👈 para ocultar o mostrar el icono del carrito
};

export default function HeaderUsuario({ nombre, direccion, mostrarCarrito = true }: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        // backgroundColor: '#fff',
      }}
    >
      {/* Foto + Info */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={{ width: 48, height: 48, borderRadius: 24, marginRight: 12 }}
        />
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{nombre}</Text>
          <View className='flex flex-row '>
            <Text className='text-sm text-gray-500 mr-2'>{direccion}</Text>
            <AntDesign name="caretdown" size={14} color="green" />
          </View>
          
        </View>
      </View>

      {/* Iconos */}
      <View style={{ flexDirection: 'row', gap: 16 }}>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </TouchableOpacity>
        {mostrarCarrito && (
          <TouchableOpacity>
            <Ionicons name="cart-outline" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
