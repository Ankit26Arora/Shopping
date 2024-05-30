// components/CustomDrawerContent.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';

function CustomDrawerContent(props: any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <Image
                    source={{ uri: 'https://your-profile-image-url.com' }}
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Your Name</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Logout"
                onPress={() => {
                    // Handle logout action
                }}
            />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        marginBottom: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileName: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CustomDrawerContent;
