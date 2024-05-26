import {View, Text, StyleSheet, Image,Animated, StatusBar} from 'react-native';
import React, { useEffect, useRef } from 'react';
import Appcolor from '../../Theme/Appcolor';
import Appimages from '../../Theme/Appimages';
import Utils from '../../common/utils';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Rootstack';

const Splashscreen = () => {
    const navigation=useNavigation<RootStackParamList>();
    const fadeAnim = useRef(new Animated.Value(1)).current;
    useEffect(()=>{
        setTimeout(() => {
            Animated.timing(fadeAnim, {
              toValue: 0,
              duration: 2000,
              useNativeDriver: true,
            }).start(() => {
              navigation.replace('Signup');
            });
          }, 3000);
    }

    ,[])
    return (
    <Animated.View style={[style.container,{ opacity: fadeAnim }]}>
        <StatusBar translucent  backgroundColor="transparent"/>
      <Image source={Appimages.Splash} style={style.image} />
      <Text style={style.text}>Shop</Text>
      <Text style={style.text}>Find Your Slyle</Text>
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Appcolor.themecolor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Utils.heightScaleSize(222),
    width: Utils.heightScaleSize(222),
  },
  text: {
    fontSize: Utils.scaleSize(30),
    color: Appcolor.white,
  },
});

export default Splashscreen;
