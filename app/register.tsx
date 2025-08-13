// app/registro.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { registerUser, loginUser, RegisterData, LoginData } from "../services/api";

export default function Registro() {
  const [rol, setRol] = useState<"cliente" | "delivery" | "local">("cliente");
  const [formData, setFormData] = useState<any>({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = async () => {
    console.log("Datos enviados:", { rol, username, ...formData });
    // Aquí iría tu lógica de envío al backend
    try {
      const user = await registerUser({ username, email, password } as RegisterData);
      console.log("Usuario registrado:", user);
    } catch (error) {
      console.error("Error al registrar:", error);
    }
    console.log("handleRegister terminó")
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#fff", flexGrow: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Registro</Text>

      {/* Selector de rol */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Selecciona tu rol</Text>
      <Picker
        selectedValue={rol}
        onValueChange={(value) => setRol(value)}
        style={{
          backgroundColor: "#f0f0f0",
          marginBottom: 20,
          borderRadius: 8,
        }}
      >
        <Picker.Item label="Cliente" value="cliente" />
        <Picker.Item label="Delivery" value="delivery" />
        <Picker.Item label="Local" value="local" />
      </Picker>

      {/* Datos básicos */}
      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={setUsername}
      />
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

      {/* Campos dinámicos según rol */}
      {rol === "cliente" && (
        <>
          <TextInput
            placeholder="Dirección de entrega"
            style={styles.input}
            onChangeText={(v) => handleChange("direccionEntrega", v)}
          />

          <Text style={{ marginVertical: 10, fontWeight: "bold", textAlign: "center" }}>
            O regístrate con:
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center", gap: 15 }}>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-google" size={24} color="#DB4437" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Ionicons name="logo-facebook" size={24} color="#4267B2" />
            </TouchableOpacity>
          </View>
        </>
      )}

      {rol === "delivery" && (
        <>
          <TextInput
            placeholder="Tipo de vehículo (moto, bici, auto)"
            style={styles.input}
            onChangeText={(v) => handleChange("vehiculoTipo", v)}
          />
          <TextInput
            placeholder="Número de placa"
            style={styles.input}
            onChangeText={(v) => handleChange("placa", v)}
          />
        </>
      )}

      {rol === "local" && (
        <>
          <TextInput
            placeholder="Nombre del negocio"
            style={styles.input}
            onChangeText={(v) => handleChange("nombreNegocio", v)}
          />
          <TextInput
            placeholder="Nombre del responsable"
            style={styles.input}
            onChangeText={(v) => handleChange("responsable", v)}
          />
        </>
      )}

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  input: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },
  socialButton: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
};
