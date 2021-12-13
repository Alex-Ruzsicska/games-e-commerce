import React from 'react';
import { IconButton, Title, Button, Text, Dialog, Paragraph } from 'react-native-paper';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/productAction';
import ProductsList from '../../components/ProductsList';
import styles from './styles';


const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector((state)=>(state.products));
  const subtotal = calculateSubtotal(products);
  const productsAmount = sumProductsAmount(products);
  let shipping = subtotal > 250? 0 : productsAmount * 10;
  let total = subtotal + shipping;
  const [isFinishingSession, setIsFinishingSession] = React.useState(false);

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

  function finishSession(){
    const productsToDelete = products.filter((product)=>(product.amount > 0));
    if(productsToDelete.length > 0){
      setIsFinishingSession(true);
      for(let product of productsToDelete){
        dispatch(deleteProduct(product.id))
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}> 
        <Title style={{color: 'white'}}>Meu Carrinho</Title>
      </View>
      <View style={styles.listContainer}>
        {
          isFinishingSession?
          ( 
            <Dialog visible={isFinishingSession} onDismiss={()=>setIsFinishingSession(false)}>
              <Dialog.Title>Sucesso!</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Compra finalizada</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={()=>setIsFinishingSession(false)}>Fechar</Button>
              </Dialog.Actions>
            </Dialog>
          ):
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
          <Title style={{color: 'white', fontSize: 15}}>Subtotal: R${subtotal.toFixed(2)}</Title>
        </View>
        <View style={{flex: 1, justifyContent: 'center', padding: 5}}>
          <Button style={{flex: 1, backgroundColor: '#34eb37', justifyContent: 'center'}} mode='contained' icon='check' onPress={finishSession}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Finalizar Compra</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

export default Cart;