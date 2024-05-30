import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<any> = (props) => {
    function alert(arg0: string): void {
        throw new Error('Function not implemented.');
    }

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/profile-pic.jpg' }}
          style={styles.profilePic}
        />
        <Text style={styles.username}>John Doe</Text>
      </View>
      {/* at this time disable the props of the drawer navigator  */}
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logged out')}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 'auto',
    padding: 20,
  },
  logoutButton: {
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default CustomDrawerContent;
