import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Appcolor from '../../Theme/Appcolor'
import Utils from '../../common/utils'
import Button from '../../Component/Button'
import Inputbox from '../../Component/inputbox'
import Backbutton from '../../Component/backbutton'

const Login = () => {
  return (
    <View style={style.container}>
        <View style={{alignItems:'center'}}>
            <Backbutton />
            <Text style={style.wtext}>Welcome</Text>
            <Text>Please Enter your valid username or password</Text>
        </View>
        <View style={{width:'90%'}}>
            <Inputbox placeholder='Enter your name' title='Username'/>
            <Inputbox placeholder='Enter your Password' title='Password' marginTop={40}/>
            <TouchableOpacity style={{marginTop:'4%',alignItems:'flex-end'}}>
                <Text style={{color:'red',fontSize:Utils.scaleSize(15)}}>Forgot password</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'10%'}}>
                <Text style={{fontSize:Utils.scaleSize(15),color:'black'}}>Remember me</Text>
            </View>
        </View>
        <View style={{width:'100%'}}>
            <Text style={{textAlign:'center',marginBottom:'5%',fontSize:Utils.scaleSize(15)}}>By connecting your account confirm that you agree {'\n'} with our 
            <Text style={{color:'black',marginLeft:'2%'}}>  Term and Condition
            </Text>
            </Text>

            <Button title='Login' />
        </View>
    </View>
  )
}


const style=StyleSheet.create({
    container:{
        backgroundColor:Appcolor.white,
        justifyContent:'space-between',
        alignItems:'center',
        flex:1
    },
    wtext:{
        color:'black',
        fontWeight:'700',
        fontSize:Utils.scaleSize(30),
        marginTop:'5%'
    }
})
export default Login