import { View, Text, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import Menu from '../../../Component/Menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import Utils from '../../../common/utils';
import Search from '../../../Component/Search';

const Home = () => {
  return (
    <View style={{ flex: 1,backgroundColor:'white' }}>
      <StatusBar
        barStyle="light-content" 
        backgroundColor="black" 
        hidden={false}
        translucent={true} 
      />
      <View style={{width:'90%',alignSelf:'center'}}>
        <Text style={style.name}>{'HELLO ANKIT'}</Text>
        {/* <Text>Welcone in Ankit Arora app</Text> */}
        {/* <Search searchtitle='Search' width={0} /> */}
      </View>
    </View>
  );
};

const style=StyleSheet.create({
  name:{
    fontSize:Utils.scaleSize(25),
    color:'black',
    fontWeight:'600',
    letterSpacing:3
  }
})
export default Home;