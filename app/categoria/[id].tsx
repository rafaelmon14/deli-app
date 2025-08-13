// app/categoria/[id].tsx
import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


type Local = {
  id: string;
  nombre: string;
  imagen: string;
  valoracion: number;
  costoEnvio: string;
};

const localesMock: Local[] = [
  {
    id: "1",
    nombre: "Agachaditos de la Miguel de Doña Mary",
    imagen: "https://zaymi-web.com/api/users/dona-mary@zaymi-web,com/logo.jpg?1691013902618",
    valoracion: 4.5,
    costoEnvio: "$2.50",
  },
  {
    id: "2",
    nombre: "La Guatita Express",
    imagen: "https://zaymi-web.com/api/users/la-guatita-express@zaymi-web,com/logo.jpg?1712287121327",
    valoracion: 4.2,
    costoEnvio: "Gratis",
  },
  {
    id: "3",
    nombre: "Sabores de mi Tierra",
    imagen: "https://zaymi-web.com/api/users/sabores-de-mi-tierra-jose-antonio@zaymi-web,com/logo.jpg?1714079895959",
    valoracion: 4.8,
    costoEnvio: "$1.50",
  },
  {
    id: "4",
    nombre: "Chips London",
    imagen: "https://zaymi-web.com/api/users/chips-london-plaza-valle@zaymi-web,com/logo.jpg?1701980589978",
    valoracion: 4.1,
    costoEnvio: "$1.00",
  },
];

export default function LocalesPorCategoria() {
  const { id, nombre } = useLocalSearchParams();
  const router = useRouter();

  const renderItem = ({ item }: { item: Local }) => (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        flex: 1,
        margin: 6,
        elevation: 2,
      }}
      onPress={() => 
        router.push({
          pathname:`/local/${item.id}`,
          params: {nombreLocal: item.nombre}
        })
      }
    >
      <Image
        source={{ uri: item.imagen }}
        style={{ width: "100%", height: 120 }}
      />
      <View style={{ padding: 8 }}>
        <Text
          style={{ fontSize: 16, fontWeight: "bold" }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.nombre}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}>
          <Ionicons name="star" size={16} color="gold" />
          <Text style={{ marginLeft: 4 }}>{item.valoracion}</Text>
          <View style={{ flex: 1 }} />
          <Text style={{ fontWeight: "bold", color: "#555" }}>{item.costoEnvio}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
    <Stack.Screen
        options={{
          title: nombre.toString(),
        }}
      />
    <View 
    style={{ flex: 1, backgroundColor: "#f8f8f8", padding: 8 }}
    
    >
      {/* <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {nombre}
      </Text> */}
      <FlatList
        data={localesMock}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </>
  );
}
