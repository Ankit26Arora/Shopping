import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Appcolor from '../../Theme/Appcolor';

interface MenuProps {
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ leftIcon, title, rightIcon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{leftIcon}</View> 
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.iconContainer}>{rightIcon}</View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Appcolor.fadecolor,
    borderRadius:50
  }
});

export default Menu;
