import React from 'react';
import { View } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import ProductsList from '../../components/ProductsList';
import styles from './styles';


const Home = () => {
  const products = useSelector((state)=>(state.products));
  const [orderBy, setOrderBy] = React.useState("score");

  return (
    <View style={styles.container}>
      <View style={styles.sortBarContainer}> 
        <ToggleButton.Row onValueChange={value => setOrderBy(value)} value={orderBy}>
          <ToggleButton style={{flex: 1}} icon="currency-usd" value="price" color='white'/>
          <ToggleButton style={{flex: 1}} icon="chart-line" value="score" color='white'/>
          <ToggleButton style={{flex: 1}} icon="alphabetical-variant" value="name" color='white'/>
        </ToggleButton.Row>
      </View>
      <View style={styles.listContainer}>
        <ProductsList products={products} orderBy={orderBy}/>
      </View>
    </View>
  );
}

export default Home;