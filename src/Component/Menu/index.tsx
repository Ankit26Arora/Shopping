import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../Navigation/Rootstack';

interface MenuProps {
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
  onPressLeft?: () => void; 
}

const Menu: React.FC<MenuProps> = ({ leftIcon, title, rightIcon, onPressLeft }) => {
  if (!leftIcon && !title && !rightIcon) {
    return null; 
  }
const navigation=useNavigation<RootStackParamList>();
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity onPress={onPressLeft} style={styles.iconContainer}>
          {leftIcon}
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {rightIcon && <TouchableOpacity style={styles.iconContainer}>{rightIcon}</TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginTop: '5%',
    backgroundColor: 'white',
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
    backgroundColor: '#F5F6FA',
    borderRadius: 50,
  },
});

export default Menu;
