import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../../Component/Button';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Appcolor from '../../Theme/Appcolor';
import Utils from '../../common/utils';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Rootstack';

const Signin = () => {
  const navigation=useNavigation<RootStackParamList>();
  const handellogin=()=>{
    navigation.navigate("Login")
  }
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>Let's Get Started</Text>
      </View>
      <View style={{width: '90%'}}>
        <Button
          title="Facebook"
          backgroundColor="#4267B2"
          icon={
            <Feather
              name="facebook"
              size={20}
              color="#fff"
              style={{marginTop: '2%'}}
            />
          }
        />
        <Button
          title="Twitter"
          backgroundColor="#1DA1F2"
          marginTop={10}
          icon={
            <Feather
              name="twitter"
              size={20}
              color="#fff"
              style={{marginTop: '2%'}}
            />
          }
        />
        <Button
          title="Google"
          backgroundColor="#EA4335"
          marginTop={10}
          icon={
            <AntDesign
              name="google"
              size={20}
              color="#fff"
              style={{marginTop: '2%'}}
            />
          }
        />
      </View>
      <View style={style.accbutton}>
        <View>
          <Text
            style={{textAlign: 'center', color: 'black,', marginBottom: 20}}>
            Already have an account?
            <TouchableOpacity onPress={handellogin}>
              <Text style={{fontWeight: 'bold', color: 'black',}}> Signin</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <Button title="Create an Account" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Appcolor.white,
  },
  accbutton: {
    width: '100%',
  },
  text: {
    color: 'black',
    fontSize: Utils.scaleSize(30),
    fontWeight: '700',
    marginTop: Utils.scaleSize(20),
  },
});

export default Signin;
