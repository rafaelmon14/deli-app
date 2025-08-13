import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from "react-native";

export default function PersonalizarPlatoModal({ visible, onClose, plato, onConfirm }) {
  const [personalizacion, setPersonalizacion] = useState({
    presa: "",
    guarnicion: "",
  });

  const actualizarDescripcion = () => {
    return `${plato.nombre} con ${personalizacion.presa || "sin presa"} y ${
      personalizacion.guarnicion || "sin guarnición"
    }`;
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center" }}>
        <View style={{ backgroundColor: "white", borderRadius: 16, padding: 16, margin: 20 }}>
          <ScrollView>
            {/* <Image
              source={{ uri: plato.imagen }}
              style={{ width: "100%", height: 180, borderRadius: 12 }}
              resizeMode="cover"
            /> */}
            <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>{plato.nombre}</Text>
            <Text style={{ color: "#555", marginVertical: 8 }}>{actualizarDescripcion()}</Text>

            {/* Opción presa */}
            <Text style={{ fontWeight: "bold", marginTop: 12 }}>Tipo de presa</Text>
            {["Pechuga", "Muslo", "Alitas"].map((op) => (
              <TouchableOpacity
                key={op}
                style={{
                  padding: 8,
                  backgroundColor: personalizacion.presa === op ? "#ddd" : "#f5f5f5",
                  marginVertical: 4,
                  borderRadius: 6,
                }}
                onPress={() => setPersonalizacion((prev) => ({ ...prev, presa: op }))}
              >
                <Text>{op}</Text>
              </TouchableOpacity>
            ))}

            {/* Opción guarnición */}
            <Text style={{ fontWeight: "bold", marginTop: 12 }}>Guarnición</Text>
            {["Papas fritas", "Ensalada", "Arroz"].map((op) => (
              <TouchableOpacity
                key={op}
                style={{
                  padding: 8,
                  backgroundColor: personalizacion.guarnicion === op ? "#ddd" : "#f5f5f5",
                  marginVertical: 4,
                  borderRadius: 6,
                }}
                onPress={() => setPersonalizacion((prev) => ({ ...prev, guarnicion: op }))}
              >
                <Text>{op}</Text>
              </TouchableOpacity>
            ))}

            {/* Botones */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
              <TouchableOpacity onPress={onClose} style={{ padding: 12, backgroundColor: "#ccc", borderRadius: 8 }}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  onConfirm({ ...plato, descripcion: actualizarDescripcion() });
                  onClose();
                }}
                style={{ padding: 12, backgroundColor: "#4CAF50", borderRadius: 8 }}
              >
                <Text style={{ color: "white" }}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
