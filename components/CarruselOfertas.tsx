import { View, Image, FlatList, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import { useRef } from 'react';

const { width } = Dimensions.get('window');

type Props = {
  imagenes: ImageSourcePropType[]; // Puede ser require() o URL
};

export default function CarruselOfertas({ imagenes }: Props) {
  const flatListRef = useRef<FlatList>(null);

  return (
    <View style={styles.contenedor}>
      <FlatList
        ref={flatListRef}
        data={imagenes}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        renderItem={({ item }) => (
          <Image source={item} style={styles.imagen} resizeMode="cover" />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    marginVertical: 8,
  },
  imagen: {
    width: width * 0.9,
    height: 180,
    borderRadius: 12,
    marginHorizontal: width * 0.05 / 2,
  },
});
