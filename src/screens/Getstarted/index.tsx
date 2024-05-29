import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  import React, {useState} from 'react';
  import Appcolor from '../../Theme/Appcolor';
  import Utils from '../../common/utils';
  import Button from '../../Component/Button';
  import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';
  import { RootStackParamList } from '../../Navigation/Rootstack';
  
  const Getstarted = () => {
    const [selected, setSelected] = useState<'Women' | 'Men' | null>('Men');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
    const handleSkip = () => {
      navigation.navigate('Drawer');
    };
  
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Image
          style={styles.image}
          source={require('../../assets/images/png/Getstarted.png')}
        />
        <View style={styles.bottomView}>
          <Text style={styles.text}>Look Good, Feel Good</Text>
          <Text style={{ textAlign: 'center' }}>
            Create your individual & unique style and {'\n'}look amazing everyday.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              marginVertical: '5%',
            }}>
            <View style={{ width: '45%' }}>
              <Button
                title="Women"
                backgroundColor={selected === 'Women' ? Appcolor.themecolor : 'gray'}
                color={selected === 'Women' ? 'white' : ''}
                onPress={() => setSelected('Women')}
              />
            </View>
            <View style={{ width: '45%' }}>
              <Button
                title="Men"
                backgroundColor={selected === 'Men' ? Appcolor.themecolor : 'gray'}
                color={selected === 'Men' ? 'white' : 'white'}
                onPress={() => setSelected('Men')}
              />
            </View>
          </View>
          <TouchableOpacity onPress={handleSkip}>
            <Text style={{ fontSize: Utils.scaleSize(20) }}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Appcolor.themecolor,
      flex: 1,
      alignItems: 'center',
    },
    image: {
      height: Utils.heightScaleSize(400),
      width: '90%',
      marginVertical: '20%',
    },
    bottomView: {
      position: 'absolute',
      bottom: 10,
      width: '90%',
      alignItems: 'center',
      backgroundColor: Appcolor.white,
      height: Utils.heightScaleSize(244),
      paddingVertical: 20,
    },
    text: {
      color: 'black',
      fontSize: Utils.scaleSize(20),
      fontWeight: '500',
      marginBottom: 10,
    },
  });
  
  export default Getstarted;
  