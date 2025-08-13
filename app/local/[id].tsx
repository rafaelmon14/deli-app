import OfertasDelLocal from "../../components/OfertasDelLocal";
import { Stack, useLocalSearchParams } from "expo-router";

const productosData = [
  {
    id: "1",
    nombre: "Carne Asada",
    imagen: "https://zaymi-web.com/api/users/dona-mary@zaymi-web,com/-NFQyrtAaAU1hoDossHV.jpg?1666977138952",
    valoracion: 4.8,
    numResenas: 120,
    opciones: [
      { nombre: "Media", precio: "$3.00" },
      { nombre: "Entera", precio: "$4.00" },
      
    ],
    descripcion: "Carne asada, arroz, guata o menestra, yuca, incluye bebida y salsas.",
  },
  {
    id: "2",
    nombre: "Pollo Broster",
    imagen: "https://zaymi-web.com/api/users/dona-mary@zaymi-web,com/-NFR1muzf-7j6_-0vHDW.jpg?1666977169246",
    valoracion: 4.6,
    numResenas: 90,
    opciones: [
      { nombre: "Pequeña", precio: "$5.99" },
      { nombre: "Mediana", precio: "$7.99" },
      { nombre: "Grande", precio: "$9.99" },
    ],
    descripcion: "Pollo broster, arroz, guata o menestra, yuca, incluye bebida y salsas.",
  },
  {
    id: "3",
    nombre: "Almuerzos",
    imagen: "https://zaymi-web.com/api/users/dona-mary@zaymi-web,com/-NcTiE7lcsBgVBe8VKdW.jpg?1699374765289",
    valoracion: 4.6,
    numResenas: 90,
    opciones: [
      { nombre: "Pequeña", precio: "$5.99" },
      { nombre: "Mediana", precio: "$7.99" },
      { nombre: "Grande", precio: "$9.99" },
    ],
    descripcion: "Pollo broster, arroz, guata o menestra, yuca, incluye bebida y salsas.",
  },
  {
    id: "4",
    nombre: "Papipollo",
    imagen: "https://zaymi-web.com/api/users/dona-mary@zaymi-web,com/-NFU7dxb4B-r3MKocVLd.jpg?1667012288564",
    valoracion: 4.6,
    numResenas: 90,
    opciones: [
      { nombre: "Pequeña", precio: "$5.99" },
      { nombre: "Mediana", precio: "$7.99" },
      { nombre: "Grande", precio: "$9.99" },
    ],
    descripcion: "Pollo broster, arroz, guata o menestra, yuca, incluye bebida y salsas.",
  },
  // más productos...
];

export default function PantallaLocal() {
    const {nombreLocal } = useLocalSearchParams();
  return (
    <>
        <Stack.Screen
            options={{
            title: nombreLocal.toString(),
            }}
        />
        <OfertasDelLocal
  productos={productosData}
  onSeleccionarProducto={(id) => console.log("Producto seleccionado:", id)}
/>
    </>
  );
}
