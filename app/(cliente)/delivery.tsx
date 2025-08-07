import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import { useAuthStore } from '../../utils/authStore';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import HeaderUsuario from '../../components/HeaderUsuario';
import Buscador from '../../components/Buscador';
import CarruselOfertas from '../../components/CarruselOfertas';
import GridCategorias from '../../components/GridCategorias';


const imagenesDeOfertas = [
  require('../../assets/Food-Combo-Offers.jpg'),
  require('../../assets/comida1.jpg'),
  require('../../assets/comida1.jpg'),
];

const categorias = [
  {
    id: '1',
    nombre: 'Pizza',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '2',
    nombre: 'Hamburguesas',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '3',
    nombre: 'Sushi',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '4',
    nombre: 'Pollo',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '5',
    nombre: 'Parrilla',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '6',
    nombre: 'Postres',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '7',
    nombre: 'Agachaditos',
    icono: require('../../assets/comida1.jpg'),
  },
  {
    id: '8',
    nombre: 'Tradicional',
    icono: require('../../assets/comida1.jpg'),
  },
];

export default function LocoCliente() {
  
const manejarBusqueda = (texto: string) => {
    console.log('Buscando:', texto);
    // Aquí puedes filtrar productos/locales
  };
  const manejarSeleccion = (categoria: any) => {
    console.log('Seleccionaste:', categoria.nombre);
  };

  const {logOut } = useAuthStore();
  return (
    <SafeAreaProvider>
      <SafeAreaView 
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#ECF0F1',
        }}>
        <View className='flex-1  px-4 '>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={'dark-content'}
            hidden={false}
          />
          <HeaderUsuario nombre="Entregar en" direccion="Av. Siempre Viva 123" />
          <Buscador onBuscar={manejarBusqueda} />

          <Text className='font-semibold text-2xl my-2'>Ofertas</Text>
          <CarruselOfertas imagenes={imagenesDeOfertas} />

          <Text className='font-semibold text-2xl my-2'>Categorias</Text>
          <GridCategorias categorias={categorias} onSeleccionar={manejarSeleccion} />
          
          <Text className='font-semibold text-2xl my-2'>Descuentos</Text>          
          
          <Button title='Sign Out' onPress={logOut}/>
         
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
