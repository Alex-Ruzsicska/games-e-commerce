import React from 'react';
import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart';
import MyAccountScreen from './src/screens/MyAccount';
import BottomTabsNavigation from './src/components/BottomTabsNavigation';


import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {/*<Tab.Navigator
          initialRouteName="Home"
          barStyle={{ alignItems: "center", justifyContent: "center"}}
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Carrinho" component={CartScreen} />
          <Tab.Screen name="Minha Conta" component={MyAccountScreen} />

        </Tab.Navigator>*/}
        <BottomTabsNavigation></BottomTabsNavigation>
      </NavigationContainer>
    </PaperProvider>
  );
}

