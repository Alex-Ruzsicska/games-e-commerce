import React from 'react';
import { useDispatch } from 'react-redux';
import { sumProduct, subtractProduct, deleteProduct } from '../../store/productAction';
import { FlatList, View, Image, Text } from 'react-native';
import { Title, Button, Badge, IconButton } from 'react-native-paper';
 

const ProductsList = (props)=>{

    const dispatch = useDispatch();


    function renderItemHome({item}){
        return(
                <View style={{flex: 1, margin: 20, backgroundColor: 'white', borderColor: '#5126d1', borderRadius: 5, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    
                    <View style={{flex: 1, alignContent: 'flex-end', width: '100%', height: 25}}>
                        {item.amount > 0? <Badge size={25}>{item.amount}</Badge> : <></>}
                    </View>

                    <View style={{flex: 5}}>
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
                            onPress = {()=>{dispatch(sumProduct(item.id))}}
                        >
                            <Text style={{color: 'white'}}>Adicionar</Text>

                        </Button>
                    </View>

                </View>
        );
    }

    function renderItemCart({item}){
        if(item.amount > 0){
            return(
                    <View style={{flex: 1, margin: 10, backgroundColor: 'white', borderColor: '#5126d1', borderRadius: 5, borderWidth: 0.5, alignItems: 'center', justifyContent: 'center', padding: 10, flexDirection: 'row' }}>
                        
                        <View style={{flex: 4}}>
                            <View style={{height: 80, width: 80}}>
                                <Image style={{ flex: 1, margin: 10, width: undefined, height: undefined}} source={item.image}/>
                            </View>
                        </View>

                        <View style={{flex: 8, alignItems: 'center'}}>
                            <View style={{flex: 4}}>
                                <Title style={{color: 'black', fontSize: 15}}>{item.name}</Title>
                            </View>
                            <View style={{flex: 4}}>
                                <Title style={{color: 'gray'}}>R${item.price}</Title>
                            </View>
                            <View style={{flex: 4, flexDirection: 'row'}}>
                                <IconButton
                                    style={{flex: 1}}
                                    icon='minus'
                                    color='#5126d1'
                                    onPress = {()=>{dispatch(subtractProduct(item.id))}}
                                />
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Title style={{color: 'gray'}}>{item.amount}</Title>
                                </View>
                                <IconButton
                                    style={{flex: 1}}
                                    icon='plus'
                                    color='#5126d1'
                                    onPress = {()=>{dispatch(sumProduct(item.id))}}
                                />
                                <IconButton
                                    style={{flex: 1}}
                                    icon='delete'
                                    color='red'
                                    onPress = {()=>{dispatch(deleteProduct(item.id))}}
                                />
                            </View>
                        </View>


                    </View>
            );
        }
        else return <></>

    }

    return(
        <FlatList
            data={props.products.sort((p1, p2)=>(
                p1[props.orderBy] > p2[props.orderBy]
            ))}
            renderItem={props.layout == "home"? renderItemHome : renderItemCart}
            keyExtractor={(item) => item.name}
        />
    );
}

export default ProductsList;