import React from 'react';
import { IconButton, Title} from 'react-native-paper';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import ProductsList from '../../components/ProductsList';
import styles from './styles';


const Cart = () => {

  function calculateSubtotal(products){
    let subtotal = 0;
    for(let product of products)
      subtotal += product.price * product.amount;
    return subtotal;
  }

  function sumProductsAmount (products){
    let amount = 0;
    for(let product of products)
      amount += product.amount;
    return amount;
  }

  const products = useSelector((state)=>(state.products));
  const subtotal = calculateSubtotal(products);
  const productsAmount = sumProductsAmount(products);
  let shipping = subtotal > 250? 0 : productsAmount * 10;
  let total = subtotal + shipping;



  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}> 
        <Title style={{color: 'white'}}>Meu Carrinho</Title>
      </View>
      <View style={styles.listContainer}>
        {
          productsAmount > 0?
          <ProductsList products={products} orderBy='name' layout='cart'></ProductsList>:
          <IconButton size={80} icon='cart-outline' color='gray' style={{alignItems: 'center', alignSelf: 'center'}}></IconButton>
        }
      </View>
      <View style={styles.footerContainer}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Title style={{color: 'white'}}>Total: R${total.toFixed(2)}</Title>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Title style={{color: 'white', fontSize: 15}}>Frete: {shipping > 0? `R$${shipping.toFixed(2)}` : "GRÁTIS"}</Title>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Title style={{color: 'white', fontSize: 15}}>Subtotal: R${subtotal.toFixed(2)}</Title>
        </View>
      </View>
    </View>
  );
}

export default Cart;