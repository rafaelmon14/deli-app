import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Buscador from "./Buscador";

interface Opcion {
  nombre: string;
  precio: string;
}

interface Producto {
  id: string;
  nombre: string;
  imagen: string;
  valoracion: number;
  numResenas: number;
  opciones: Opcion[];
  descripcion: string;
}

interface Props {
  productos: Producto[];
  onSeleccionarProducto: (id: string, opcionSeleccionada: Opcion) => void;
}

export default function ProductosDelLocal({
  productos,
  onSeleccionarProducto,
}: Props) {
  const [selecciones, setSelecciones] = useState<{ [key: string]: Opcion }>({});
const manejarBusqueda = (texto: string) => {
    console.log('Buscando:', texto);
    // Aquí puedes filtrar productos/locales
  };
  const renderProducto = ({ item }: { item: Producto }) => {
    const opcionSeleccionada = selecciones[item.id] || item.opciones[0];

    return (
      <TouchableOpacity
        style={styles.card}
        // onPress={() => onSeleccionarProducto(item.id, opcionSeleccionada)}
        activeOpacity={0.8}
        
      >
        

        <Image source={{ uri: item.imagen }} style={styles.imagen} />

        <Text style={styles.nombre} numberOfLines={1}>
          {item.nombre}
        </Text>

        <View style={styles.row}>
          <View style={styles.row}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.valoracion}>
              {item.valoracion} ({item.numResenas})
            </Text>
          </View>
          <Text style={styles.precio}>{opcionSeleccionada.precio}</Text>
        </View>

        <View style={styles.opcionesContainer}>
          {item.opciones.map((opcion) => {
            const seleccionada = opcion.nombre === opcionSeleccionada.nombre;
            return (
              <TouchableOpacity
                key={opcion.nombre}
                style={[
                  styles.opcion,
                  seleccionada && styles.opcionSeleccionada,
                ]}
                onPress={() =>
                  setSelecciones((prev) => ({ ...prev, [item.id]: opcion }))
                }
              >
                <Text
                  style={[
                    styles.opcionTexto,
                    seleccionada && styles.opcionTextoSeleccionado,
                  ]}
                >
                  {opcion.nombre}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.descripcion} numberOfLines={2}>
          {item.descripcion}
        </Text>
        <View style={styles.opcionesContainer2}>
          <TouchableOpacity style={[styles.opcion,]}>
            <Text style={[styles.opcionTexto,]}>
              Agregar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={[styles.opcion,]}
          onPress={() => 
        router.push({
          pathname:`/modal/`, // /${item.id}          
          params: {nombreLocal: item.nombre}
        })
      }
          >
            <Text style={[styles.opcionTexto,]}>
              Personalizar
            </Text>
          </TouchableOpacity>
        </View>
        
      </TouchableOpacity>
      
    );
  };

  return (
    <>
    <Buscador placeholder="Buscar productos..." onBuscar={manejarBusqueda} />
    <FlatList
      data={productos}
      renderItem={renderProducto}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      contentContainerStyle={styles.lista}
    />
    </>
  );
}

const styles = StyleSheet.create({
  lista: { paddingHorizontal: 8, paddingBottom: 80 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    padding: 8,
    flex: 1,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  imagen: { width: "100%", height: 120, borderRadius: 8 },
  nombre: { fontSize: 14, fontWeight: "bold", marginTop: 6 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  valoracion: { fontSize: 12, color: "#555", marginLeft: 4 },
  precio: { fontSize: 13, fontWeight: "bold", color: "#27ae60" },
  opcionesContainer2: { flexDirection: "row", alignItems: "center", justifyContent: "center",}, 
  opcionesContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 6, gap: 4 },
  opcion: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  opcionSeleccionada: {
    backgroundColor: "#27ae60",
    borderColor: "#27ae60",
  },
  opcionTexto: { fontSize: 11, color: "#555" },
  opcionTextoSeleccionado: { color: "#fff" },
  descripcion: { fontSize: 11, color: "#777", marginTop: 4 },
});
