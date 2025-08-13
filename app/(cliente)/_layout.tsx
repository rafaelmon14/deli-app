import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function ClienteLayout() {
  return (
    
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#000000',
      tabBarInactiveTintColor: 'gray'
      }}>

        <Tabs.Screen 
        name="delivery" 
        options={{ 
          title: 'Delivery',
          tabBarIcon: ({color, size}) => (
              <MaterialIcons name="delivery-dining" size={size} color={color}/>
            ),
          }} 
      />
      <Tabs.Screen 
        name="transporte" 
        options={{ 
          title: 'Transporte',
          tabBarIcon: ({color, size}) => (
              <MaterialIcons name="emoji-transportation" size={size} color={color}/>
            ),
          }} 
      />
      
      <Tabs.Screen 
        name="perfil" 
        options={{ 
          title: 'Settings',
          tabBarIcon: ({color, size}) => (
              <MaterialIcons name="settings" size={size} color={color}/>
            ),
          }} 
      />
      
    </Tabs>
  );
}
