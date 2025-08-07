import React, { useRef, useEffect, useState } from 'react';
import { View, ActivityIndicator, StatusBar, TouchableOpacity, StyleSheet, Text, Button  } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Link, Stack } from 'expo-router';
import * as Location from 'expo-location';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import HeaderUsuario from '../../components/HeaderUsuario';


export default function HomeCliente() {  
    const origin = {latitude: -3.981619, longitude: -79.214194};
    const destination = {latitude: -3.993863, longitude: -79.198413};
    const [region, setRegion] = useState(null);
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCzr-ZMS8dvQFFMuBklyquhphjzuieg47I';
    const mapRef = useRef<MapView>(null);
    const [mode, setMode] = useState<'delivery' | 'transport'>('delivery');
    

    const toggleMode = () => {
    setMode((prev) => (prev === 'delivery' ? 'transport' : 'delivery'));
  };
    useEffect(() => {
    setTimeout(() => {
      mapRef.current?.fitToSuppliedMarkers(['conductor', 'cliente'], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
    }, 1000); // Espera breve para asegurarte que los marcadores estén renderizados
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso denegado');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (!region) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const styles = StyleSheet.create({
  actionContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#ffffffee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
   switchText: {
    fontWeight: '600',
    fontSize: 14,
  },
    switchButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 20,
    elevation: 5,
  },
  panel: {
    position: 'absolute',
    bottom: 100,
    left: 20,
    right: 20,
    backgroundColor: '#ffffffcc',
    padding: 20,
    borderRadius: 16,
    elevation: 5,
  },
});

  return (
    <SafeAreaProvider>
      <SafeAreaView 
      style={{
        flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
      }}>
    
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={'dark-content'}
          hidden={false}
        />
        
      <HeaderUsuario nombre="Rafael" direccion="Av. Siempre Viva 123" mostrarCarrito={false}/>


      <MapView 
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={region}
      >
         <Marker coordinate={region}/>
        </MapView>
        {/* Botón para cambiar de modo */}
        {/* <View style={styles.actionContainer}>
          
          <TouchableOpacity style={styles.switchButton} onPress={toggleMode}>
            <Text style={styles.switchText}>
              Cambiar a {mode === 'delivery' ? 'Transporte' : 'Delivery'}
            </Text>
            
          </TouchableOpacity>
          
        <Link asChild push href="/modal">
                <Button title='Open modal'/>
              </Link>
        </View> */}
    </SafeAreaView>
    </SafeAreaProvider>
  );
}
