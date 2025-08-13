// components/Promociones.tsx
import React from "react";
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Promocion = {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  calificacion: number;
};

type PromocionesProps = {
  data: Promocion[];
};

export default function Promociones({ data }: PromocionesProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Lado izquierdo: imagen y calificación */}
            <View style={styles.left}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <View style={styles.rating}>
                <Ionicons name="star" size={14} color="#FFD700" />
                <Text style={styles.ratingText}>{item.calificacion.toFixed(1)}</Text>
              </View>
            </View>

            {/* Lado derecho: nombre y descripción */}
            <View style={styles.right}>
              <Text style={styles.nombre} numberOfLines={1}>
                {item.nombre}
              </Text>
              <Text style={styles.descripcion} numberOfLines={2}>
                {item.descripcion}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginRight: 12,
    alignItems: "center",
    width: 280,
    elevation: 3, // sombra Android
    shadowColor: "#000", // sombra iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  left: {
    alignItems: "center",
    marginRight: 10,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#555",
  },
  right: {
    flex: 1,
    justifyContent: "center",
  },
  nombre: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: "#555",
  },
});
