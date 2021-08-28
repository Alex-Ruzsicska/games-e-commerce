import React from 'react';
import PRODUCTS from '../../mock/products';
import { FlatList, View, Image, Text } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';


const renderItem = ({item})=>(
    <View style={{flex: 1, margin: 10, backgroundColor: 'red' }}>
        <View style={{flex: 2}}>
        <Title>{item.name}</Title>
            

        </View>
        <View style={{ flex: 10, backgroundColor: 'red', flexDirection: 'row'}} key={item.name}>
            <View style={{height: 180, width: 180, backgroundColor: 'blue'}}>
                <Image style={{ flex: 1, margin: 10, width: undefined, height: undefined}} source={item.image}/>
            </View>
            <View style={{flex: 1, backgroundColor: 'gray', padding: 10}}>
                <View style={{flex: 4, alignItems: 'center', justifyContent: 'center'}}>
                    <Title>R${item.price}</Title>
                </View>
                <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
                <IconButton
                    icon='cart'
                    size={30}
                    mode='contained'
                    onPress={() => console.log('Pressed')}
                />
                </View>
            </View>
        </View>
    </View>

)

const ProductsList = ()=>{
    return(
        <FlatList
            data={PRODUCTS}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            //extraData={selectedId}
        />
    );
}

export default ProductsList;