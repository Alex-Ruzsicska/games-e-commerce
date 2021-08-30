import React from 'react';
import { View } from 'react-native';
import { Paragraph, IconButton } from 'react-native-paper';

const InformationCard = (props)=>{
    return(
        <View style={{flex: 1, flexDirection: 'row', margin: 10, backgroundColor: '#5126d1', borderRadius: 10 }}>
              <View style={{flex: 10, justifyContent: 'center' }}>
                <Paragraph style={{color: 'white',alignSelf: 'center'}}>
                    {props.text}
                </Paragraph>
              </View>
              <View style={{flex: 2}}>
                <IconButton icon='pencil' style={{flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}} color='white'/>
              </View>
        </View>
    );
}

export default InformationCard;