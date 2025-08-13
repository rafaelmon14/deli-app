import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useAuthStore } from '../../utils/authStore';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import HeaderUsuario from '../../components/HeaderUsuario';
import Buscador from '../../components/Buscador';
import CarruselOfertas from '../../components/CarruselOfertas';
import GridCategorias from '../../components/GridCategorias';
import Promociones from '../../components/Promociones';


const imagenesDeOfertas = [
  require('../../assets/Food-Combo-Offers.jpg'),
  require('../../assets/comida1.jpg'),
  require('../../assets/comida1.jpg'),
];

const categorias = [
  {
    id: '1',
    nombre: 'Alitas',
    icono: require('../../assets/chicken-wing_17553397.png'),
  },
  {
    id: '2',
    nombre: 'Hamburguesas',
    icono: require('../../assets/burger_4479138.png'),
  },
  {
    id: '3',
    nombre: 'Sushi',
    icono: require('../../assets/sushi.png'),
  },
  {
    id: '4',
    nombre: 'Pollo',
    icono: require('../../assets/pollo.png'),
  },
  {
    id: '5',
    nombre: 'Parrilla',
    icono: require('../../assets/tostar.png'),
  },
  {
    id: '6',
    nombre: 'Postres',
    icono: require('../../assets/panna.png'),
  },
  {
    id: '7',
    nombre: 'Agachaditos',
    icono: require('../../assets/arroz-con-pollo.png'),
  },
  {
    id: '8',
    nombre: 'Tradicional',
    icono: require('../../assets/tamal.png'),
  },
];

const promocionesData = [
  {
    id: "1",
    nombre: "Pizzería La Italiana",
    descripcion: "Envio gratis a partir de $10.",
    imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    calificacion: 4.8,
  },
  {
    id: "2",
    nombre: "Sushi Express",
    descripcion: "Combo de 20 piezas + bebida a solo $12.99",
    imagen: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    calificacion: 4.6,
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
          backgroundColor: '#ECF0F1',
        }}>
        
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={'dark-content'}
            hidden={false}
          />
          <ScrollView
            contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
          >
          <HeaderUsuario nombre="Entregar en" direccion="Av. Siempre Viva 123" />
          <Buscador onBuscar={manejarBusqueda} />

          <View>
            <Text className='font-semibold text-lg my-2'>Ofertas del día</Text>
            <CarruselOfertas imagenes={imagenesDeOfertas} />
          </View>

          
          <View>
            <Text className='font-semibold text-lg my-2'>Categorias</Text>
            <GridCategorias categorias={categorias}  />
          </View>

          <View>
            <Text className='font-semibold text-lg my-2'>Promociones</Text>  
            <Promociones data={promocionesData} />
          </View>
          {/* <Button title='Sign Out' onPress={logOut}/> */}
         
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
