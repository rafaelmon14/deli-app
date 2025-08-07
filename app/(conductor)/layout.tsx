import { Tabs } from 'expo-router';

export default function ConductorLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Inicio' }} />
      {/* <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} /> */}
      {/* <Tabs.Screen name="saldo" options={{ title: 'Saldo' }} /> */}
    </Tabs>
  );
}