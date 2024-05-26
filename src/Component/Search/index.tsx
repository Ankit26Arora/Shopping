import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React from 'react';
import Utils from '../../common/utils';
import Appcolor from '../../Theme/Appcolor';

interface SearchProps {
    searchlabel: string;
    searchtitle: string;
    width: number;
    image?: any;
}

const Search: React.FC<SearchProps> = ({ width, searchlabel, searchtitle, image }) => {
    return (
        <View>
            <Text style={styles.text}>{searchlabel}</Text>
            <View style={[styles.container, { width }]}>
                <Image source={image} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder={searchtitle}
                    placeholderTextColor="black"

                />
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: Utils.heightScaleSize(40),
        borderRadius: Utils.scaleSize(8),
        borderWidth: 1,
        marginTop:10
    },
    image: {
        width: 20,
        height: 20, 
        marginHorizontal: 8,
        color:'black'
    },
    textInput: {
        flex: 1,
        fontSize:Utils.heightScaleSize(15)
        
    },
    text:{
        color:Appcolor.fadecolor,
        fontSize:Utils.heightScaleSize(15),
        marginTop:5
    }
});
