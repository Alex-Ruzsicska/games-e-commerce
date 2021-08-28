import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import HomeScreen from '../../screens/Home';
import CartScreen from '../../screens/Cart';
import MyAccountScreen from '../../screens/MyAccount';



const BottomTabsNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'cart', title: 'Carrinho', icon: 'cart' },
    { key: 'myAccount', title: 'Minha Conta', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    cart: CartScreen,
    myAccount: MyAccountScreen
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomTabsNavigation;