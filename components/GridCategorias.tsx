import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const numColumnas = 4;
const { width } = Dimensions.get('window');
const itemAncho = width / numColumnas - 20;

type Categoria = {
  id: string;
  nombre: string;
  icono: any; // Puede ser require() o URL (ver más abajo)
};

type Props = {
  categorias: Categoria[];
  onSeleccionar?: (categoria: Categoria) => void;
};

export default function GridCategorias({ categorias, onSeleccionar }: Props) {
  const renderItem = ({ item }: { item: Categoria }) => (
    <TouchableOpacity style={styles.item} onPress={() => onSeleccionar?.(item)}>
      <Image source={item.icono} style={styles.icono} />
      <Text style={styles.texto} numberOfLines={1} ellipsizeMode="tail">{item.nombre}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList className='bg-red-400 mb-0'
      data={categorias}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumnas}
    />
  );
}

const styles = StyleSheet.create({
  lista: {
    marginTop: 14
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: itemAncho,
    margin: 5,
    backgroundColor: '#f5f5f5',
    // borderRadius: 12,
    paddingVertical: 12,
    // elevation: 2,
  },
  icono: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderRadius: 25,
  },
  texto: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});
