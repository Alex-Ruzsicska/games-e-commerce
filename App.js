import React from 'react';

//redux
import store from './src/store/store';
import { Provider } from 'react-redux'

//react-native-paper
import { Provider as PaperProvider } from 'react-native-paper';

//react-navigation
import BottomTabsNavigation from './src/components/BottomTabsNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabsNavigation></BottomTabsNavigation>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

