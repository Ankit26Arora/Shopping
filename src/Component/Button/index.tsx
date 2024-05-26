import { View, Text, StyleSheet } from 'react-native';
import React, { ReactNode } from 'react';
import Appcolor from '../../Theme/Appcolor';
import Utils from '../../common/utils';

interface ButtonProps {
  title?: string;
  marginTop?: number;
  backgroundColor?: string;
  icon?: ReactNode; 
}

const Button = (props: ButtonProps) => {
  return (
    <View style={[styles.container, { marginTop: props.marginTop, backgroundColor: props.backgroundColor || Appcolor.themecolor }]}>
      {props.icon}
      <Text style={styles.button}>{props.title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Appcolor.themecolor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: Utils.heightScaleSize(55),
    borderRadius: Utils.scaleSize(8),
    paddingHorizontal: Utils.scaleSize(10), 
  },
  button: {
    color: 'white',
    fontSize: Utils.scaleSize(20),
    fontWeight: '500',
    marginLeft:'2%'
  },
});
