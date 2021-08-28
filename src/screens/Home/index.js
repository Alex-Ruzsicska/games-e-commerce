import React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import ProductsList from '../../components/ProductsList';
import styles from './styles';


const Home = () => {

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <Searchbar style={styles.searchBar}></Searchbar>
      </View>
      <View style={styles.sortBarContainer}> 

      </View>
      <View style={styles.listContainer}>
        <ProductsList/>
      </View>
    </View>
  );
}

export default Home;