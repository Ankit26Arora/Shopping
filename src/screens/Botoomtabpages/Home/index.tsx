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
      <View style={{ marginTop: '8%',width:'95%',alignSelf:'center' }}>
        <Menu 
          leftIcon={<AntDesign name="menuunfold" size={30} color="black" />}
          rightIcon={<Ionicons name="md-search" size={30} />}
        />
      </View>
      <View style={{width:'90%',alignSelf:'center'}}>
        <Text style={style.name}>{'Ankit'}</Text>
        <Text>Welcone in Ankit Arora app</Text>
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