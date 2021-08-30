import React from 'react';
import { View, ScrollView } from 'react-native';
import InformationCard from '../../components/InformationCard';
import { Avatar, Title } from 'react-native-paper';
import styles from './styles';


const MyAccount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Image size={120} source={require('../../assets/images/lou.jpg')}/>
        <Title style={styles.name}>Lou Reed</Title>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationCell}>            
            <Title style={styles.title}>Endereços de Entrega:</Title>
            <ScrollView style={{flex: 1}}>
              <InformationCard text="281 9th Ave, New York, NY 10001, EUA"/>
              <InformationCard text="281 9th Ave, New York, NY 10001, EUA"/>
              <InformationCard text="281 9th Ave, New York, NY 10001, EUA"/>
              <InformationCard text="281 9th Ave, New York, NY 10001, EUA"/>
            </ScrollView>
        </View>

        <View style={styles.informationCell}>            
            <Title style={styles.title}>Métodos de Pagamento:</Title>
            <ScrollView style={{flex: 1}}>
              <InformationCard text="Cartão MasterCard final 1234"/>
              <InformationCard text="Cartão MasterCard final 1342"/>
              <InformationCard text="Cartão Visa final 1789"/>
            </ScrollView>
        </View>
        
      </View>
    </View>
  );
}

export default MyAccount;