import React from 'react';
import PRODUCTS from '../../mock/products';
import { FlatList, View, Image, Text } from 'react-native';
import { Title, Button } from 'react-native-paper';


const renderItem = ({item})=>(
    <View style={{flex: 1, margin: 20, backgroundColor: 'white', borderColor: '#5126d1', borderRadius: 5, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

        <View style={{flex: 6}}>
            <View style={{height: 200, width: 200}}>
                <Image style={{ flex: 1, margin: 10, width: undefined, height: undefined}} source={item.image}/>
            </View>
        </View>

        <View style={{flex: 4, alignItems: 'center'}}>
            <Title style={{color: 'black'}}>{item.name}</Title>
            <Title style={{color: 'gray'}}>R${item.price}</Title>
        </View>

        <View style={{flex: 2}}>
           <Button
            style={{flex: 1, backgroundColor: '#5126d1'}}
            icon = 'cart'
            color = 'white'
           >
               <Text style={{color: 'white'}}>Adicionar</Text>
           </Button>
        </View>

    </View>

)

const ProductsList = (props)=>{
    return(
        <FlatList
            data={props.products.sort((p1, p2)=>(
                p1[props.orderBy] > p2[props.orderBy]
            ))}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
    );
}

export default ProductsList;