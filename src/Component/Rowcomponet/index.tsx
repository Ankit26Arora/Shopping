import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Utils from '../../common/utils'
import Appcolor from '../../Theme/Appcolor'
interface row{
    title?:string
    button?:string
}
const Rowcomponent = (props: row) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <TouchableOpacity>
        <Text style={styles.button}>See All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Rowcomponent


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    text:{
        color:'black',
        fontSize:Utils.scaleSize(20),
        fontWeight:'400'
    },
    button:{
        color:Appcolor.themecolor,
        fontSize:Utils.scaleSize(15),
        fontWeight:'500'
    }
    
});
