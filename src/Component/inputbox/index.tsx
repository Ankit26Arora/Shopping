import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Appcolor from '../../Theme/Appcolor';
import Utils from '../../common/utils';
interface InputProps {
    title?: string;
    marginTop?: number;
    backgroundColor?: string;
    placeholder?:string;
    forgot?:string
  }
  
const Inputbox = (props:InputProps) => {
  return (
    <View style={[style.container,{marginTop:props.marginTop}]}>
      <Text style={{fontSize:Utils.scaleSize(14)}}>{props.title}</Text>
      <TextInput style={{color:'black'}} placeholderTextColor='black' placeholder={props.placeholder} />
    </View>
  )
}


const style=StyleSheet.create({
    container:{
        borderBottomWidth:1,
        borderColor:Appcolor.gray
    }
})
export default Inputbox