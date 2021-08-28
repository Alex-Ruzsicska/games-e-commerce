import React from 'react';
import PRODUCTS from '../../mock/products';
import { FlatList, View, Image } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';


const renderItem = ({item})=>(

        <View style={{flex: 1, flexDirection: 'row'}} key={item.name}>
            <View style={{flex: 4}}>
                <Image  style={{flex: 1, width: '100%'}} source={{uri: `../../assets/images/${item.image}`}}/>
            </View>
            <View style={{flex: 8}}>
                <Title>{item.name}</Title>

            </View>
        </View>
        

        
    )

const ProductsList = ()=>{
    return(
        <FlatList
            data={PRODUCTS}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            //extraData={selectedId}
        />
    );
}

export default ProductsList;