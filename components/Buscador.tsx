import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

type Props = {
  placeholder?: string;
  onBuscar: (texto: string) => void;
};

export default function Buscador({ placeholder = "Buscar productos o locales...", onBuscar }: Props) {
  const [texto, setTexto] = useState('');

  const manejarCambio = (valor: string) => {
    setTexto(valor);
    onBuscar(valor); // Envía el texto de búsqueda al padre
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={20} color="#999" style={styles.icono} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={texto}
        onChangeText={manejarCambio}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  icono: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
