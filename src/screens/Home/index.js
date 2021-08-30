import React from 'react';
import { View } from 'react-native';
import { Searchbar, ToggleButton } from 'react-native-paper';
import PRODUCTS from '../../mock/products';
import ProductsList from '../../components/ProductsList';
import styles from './styles';


const Home = () => {

  const [orderBy, setOrderBy] = React.useState("score");

  return (
    <View style={styles.container}>
      {/*<View style={styles.searchBarContainer}>
        <Searchbar style={styles.searchBar}></Searchbar>
  </View>*/}
      <View style={styles.sortBarContainer}> 
        <ToggleButton.Row onValueChange={value => setOrderBy(value)} value={orderBy}>
          <ToggleButton style={{flex: 1}} icon="currency-usd" value="price" color='white'/>
          <ToggleButton style={{flex: 1}} icon="chart-line" value="score" color='white'/>
          <ToggleButton style={{flex: 1}} icon="alphabetical-variant" value="name" color='white'/>
        </ToggleButton.Row>
      </View>
      <View style={styles.listContainer}>
        <ProductsList products={PRODUCTS} orderBy={orderBy}/>
      </View>
    </View>
  );
}

export default Home;