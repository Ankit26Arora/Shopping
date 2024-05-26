import { View, Text } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface BackbuttonProps {
  title?: string;
  left?: string;
}

const Backbutton = (props: BackbuttonProps) => {
    const navigation=useNavigation();
  return (
    <View style={{ height: 40,  flexDirection: 'row', alignItems: 'center' }}>
      <Icon style={{ marginLeft: '5%',color:'black' }}  name='arrow-back' size={24} color='#fff' onPress={()=>navigation.goBack()} />
      <Text style={{ flex: 1, textAlign: 'center', color: '#fff' }}>{props.title}</Text>
      <Text style={{ marginRight: 10, color: '#fff' }}>{props.left}</Text>
    </View>
  );
}

export default Backbutton;
