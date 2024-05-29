import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import { DrawerActions } from '@react-navigation/native'; // Import DrawerActions for drawer navigation

interface MenuProps {
  leftIcon?: React.ReactNode;
  title?: string;
  rightIcon?: React.ReactNode;
  onPressLeft?: () => void; // Add onPressLeft prop
}

const Menu: React.FC<MenuProps> = ({ leftIcon, title, rightIcon, onPressLeft }) => {
  if (!leftIcon && !title && !rightIcon) {
    return null; 
  }

  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity onPress={onPressLeft} style={styles.iconContainer}>
          {leftIcon}
        </TouchableOpacity>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
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
    color: '#fff', // This might need adjustment based on your theme
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
